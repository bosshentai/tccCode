import 'reflect-metadata'
import express from 'express'

import { HttpError } from './models/http-error'
import bodyParser from 'body-parser'
import { router } from './Routes'

const app = express()

// app.use(express.json());
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE',
  )

  next()
})

app.use('/api', router)

app.use((req, res, next) => {
  const error = new HttpError('Not found', 404)
  throw error
})

app.listen(5000, () =>
  console.log('server is running on port 5000'),
)
