
import {  Roles } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';


import { prismaClient } from "../../../database/prismaClient";
import { HttpError } from "../../../models/http-error";


export class CreateClientController {
  async handle(request: Request, response: Response, next: NextFunction) {

    if (request.method !== "POST") {
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }

    try {

      const {
        name,
        email,
        phone,
        CNI,
        NIF,
        birth,
        trainingplanId,
        personalTrainerId,
        discountId
      }
        = request.body;


      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "123456",
          phone: phone,
          role: Roles.CLIENT,
          CNI: CNI,
          NIF: NIF,
          birth_date: new Date(birth),
          client: {
            create: {
              cpt: {
                create: {
                  personal_trainer_id: personalTrainerId
                }
              },
              ctp: {
                create: {
                  training_plan_id: trainingplanId
                }
              },
              cd: {
                create: {
                  discount_id: discountId
                }
              }
            }
          }
        },
   
      })



    
      return response.status(201).json(user);

    } catch (e) {

      const error = new HttpError("Fail to add Client", 500);
      return next(error);
    }
  }
}






