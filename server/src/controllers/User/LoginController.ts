import { NextFunction, Request, Response } from 'express'
import { compare } from 'bcryptjs'

import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { sign } from 'jsonwebtoken'
import { LoginUseCase } from '../../useCases/User/LoginUseCase'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

const authConfig = require('../../config/auth.json')

export class LoginController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) :Promise<Response>{
    const { email, password } = request.body


    const loginUseCase = new LoginUseCase()
    let token
    try{
       token = await loginUseCase.execute({
        email,
        password
      })


    return response.json(token)
    }catch(e){
      return response.status(500).json("NO internet")
    //   const error = new HttpError('No internet connection',500)
    //  return next(error)
    }


    // const loginUseCase = new LoginUseCase();

    // const token = await loginUseCase.execute({
    //   email,password
    // })

    // return response.json(token)

    // let existingUser

    // try {
    //   existingUser = await prismaClient.user.findUnique({
    //     where: {
    //       email: email,
    //     },
    //   })
    // } catch (e) {
    //   const error = new HttpError(
    //     'Logging in failed, please try again later.',
    //     500,
    //   )
    //   return next(error)
    // }

    // if (!existingUser) {
    //   const error = new HttpError(
    //     'Invalid credentials, could not log you in.',
    //     403,
    //   )
    //   return next(error)
    // }

    // let isValidPassword = false
    // try {
    //   isValidPassword = await compare(
    //     password,
    //     existingUser.password,
    //   )
    // } catch (e) {
    //   const error = new HttpError(
    //     'Could not log you in, please check your credentials and try again.',
    //     500,
    //   )
    //   return next(error)
    // }

    // if (!isValidPassword) {
    //   const error = new HttpError(
    //     'Invalid credentials, could not log you in.',
    //     403,
    //   )
    //   return next(error)
    // }

    // let token
    // const generateTokenProvider =
    //   new GenerateTokenProvider()

    // try {
    //   // token = sign({ userId: existingUser.id }, authConfig.secret, {
    //   //   // expiresIn: '1h'
    //   //   expiresIn: '1d'
    //   // })
    //   token = await generateTokenProvider.execute(
    //     existingUser.id,
    //   )
    // } catch (e) {
    //   const error = new HttpError(
    //     'Logging in failed,please try again later.',
    //     500,
    //   )
    //   return next(error)
    // }

    // return response.json({
    //   token: token,
    // })
  }
}
