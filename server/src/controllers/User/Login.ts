import { NextFunction, Request, Response } from 'express';
import {compare} from "bcryptjs";

import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';
import { sign } from 'jsonwebtoken';



export class Login {
  async handle(request: Request, response: Response, next: NextFunction) {

    const { email, password } = request.body;

    let existingUser;

    try {
      existingUser = await prismaClient.user.findUnique({
        where: {
          email: email
        }
      })
    } catch (e) {
      const error = new HttpError("Logging in failed, please try again later.", 500);
      return next(error);
    }


    if (!existingUser) {
      const error = new HttpError("Invalid credentials, could not log you in.", 403);
      return next(error);
    }


    let isValidPassword = false;
    try{
      isValidPassword = await compare(password,existingUser.password);
    }catch(e){
      const error = new HttpError("Could not log you in, please check your credentials and try again.",500);
      return next(error);
    }


    if (!isValidPassword){
      const error = new HttpError("Invalid credentials, could not log you in.",403);
      return next(error);
    }


    let token;
    try {
      token = sign({userId: existingUser.id, email: existingUser.email}, "supersecret_don't_share")
      
    } catch (e) {
      const error = new HttpError("Logging in failed,please try again later.",500);
      return next(error);
    }


    return response.json({
      userId: existingUser.id,
      email: existingUser.email,
      token: token
    })
  }

}