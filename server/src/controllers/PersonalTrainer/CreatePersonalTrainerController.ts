import { Roles } from "@prisma/client";
import { hash, hashSync } from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { userInfo } from "os";

import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";


export class CreatePersonalTrainerController {
  async handle(request: Request, response: Response, next: NextFunction) {


    if (request.method !== "POST") {
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }

    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return next(new HttpError('Invalid inputs passed, please check your data.', 422));
    }



    const {
      name,
      email,
      phone,
      CNI,
      NIF,
      birth,
      value } = request.body;


    let user;

    let existingUser;

    try {
      existingUser = await prismaClient.user.findUnique({
        where: {
          email: email
        }
      })
    } catch (e) {
      const error = new HttpError(
        "Couldn't register the personal Trainer",
        500);
      return next(error);
    }

    if (existingUser) {
      const error = new HttpError(
        "User exists already",
        422);
      return next(error);
    }


    let hashedPassword;
    try {
      // password
      hashedPassword = await hash("123456", 12);

    } catch (e) {
      const error = new HttpError(
        "Could not create Personal Trainer, please try again",
        500);
      return next(error);
    }

    try {

      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          phone: phone,
          role: Roles.PERSONALTRAINER,
          CNI: CNI,
          NIF: NIF,
          birth_date: new Date(birth),
          personal_trainers: {
            create: {
              value: Number(value)
            }
          }
        },
      })




    } catch (e) {
      const error = new HttpError("Fail to add Personal Trainer", 500);
      return next(error);
    }


    return response.status(201).json(user);

  }
}






