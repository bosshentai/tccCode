
import { prisma, Roles } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';


import { prismaClient } from "../../../database/prismaClient";
import { HttpError } from "../../../models/http-error";


export class CreateClientController {
  async handle(request: Request, response: Response, next: NextFunction) {



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





      // const user = await prismaClient.user.create({
      //   data: {
      //     name: name,
      //     email: email,
      //     password: "123456",
      //     phone: phone,
      //     role: Roles.CLIENT,
      //     CNI: CNI,
      //     NIF: NIF,
      //     birth_date: new Date(birth),
      //     client: {
      //       create: {
      //         cpt: {
      //           create: {

      //             personal_trainer_id: personalTrainerId
      //           }
      //         },
      //         ctp: {
      //           create: {
      //             training_plan_id: trainingplanId
      //           }
      //         },
      //         cd: {
      //           create: {
      //             discount_id: discountId
      //           }
      //         }
      //       }
      //     }
      //   }
      // })



      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "1234256",
          phone: phone,
          role: Roles.CLIENT,
          CNI: CNI,
          NIF: NIF,
          birth_date: new Date(birth)
        }
      });



      const client = await prismaClient.client.create({
        data: {
          user_id: user.id,
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
          cd:{
            create:{
              discount_id: discountId
            }
          }
        }
      })



      // const client = await prismaClient.client.create({
      //   data: {
      //     user_id: user.id

      //   }
      // });

      // const clientTrainingplan = await prismaClient.clientTrainingPlan.create({
      //   data: {
      //     client_id: client.id,
      //     training_plan_id: trainingplanId

      //   }
      // })

      // const clientPersonalTrainer = await prismaClient.clientPersonalTrainer.create({
      //   data: {
      //     client_id: client.id,
      //     personal_trainer_id: personalTrainerId
      //   }
      // })

      // const discount = await prismaClient.clientDiscount.create({
      //   data: {
      //     client_id: client.id,
      //     discount_id: discountId
      //   }
      // })



      // const result = await prismaClient.$transaction([clientTrainingplan,clientPersonalTrainer,discount]);

      // return response.status(201).json(result);

      // return response.status(201).json(user);
      return response.status(201).json(client);

    } catch (e) {
      const error = new HttpError("Fail to add Client", 500);
      return next(error);
    }
  }
}






