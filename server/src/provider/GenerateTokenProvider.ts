
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import dayjs from "dayjs";
const authConfig = require('../config/auth.json')


export class GenerateTokenProvider {



  async execute(userId:string){

    // const expiresIn = dayjs().add(1,"day").unix();

    const token = sign({}, authConfig.secret,{
      subject: userId,
      expiresIn: '30s'
    })

    return token;
  }
}

