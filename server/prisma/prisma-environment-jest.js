const NodeEnviroment = require('jest-environment-node')
const { v4: uuid } = require('uuid')
const { execSync } = require('child_process')
const { resolve } = require('path')
const { Client } = require('pg')

const prismaCli = '../node_modules/.bin/prisma'

require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test'),
})

class CustomEnvironment extends NodeEnviroment {
  constructor(config) {
    super(config)
    this.schema = `code schema_${uuid()}`
    console.log('schemas', this.schema)
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectiongString
    this.global.process.env.DATABASE_URL =
      this.connectionString

    // Run as migrations
    execSync(`${prismaCli} migrate dev`)
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString,
    })

    await client.connect()
    await client.query(
      `DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`,
      )
    await client.end()
  }
}

module.exports = CustomEnvironment;