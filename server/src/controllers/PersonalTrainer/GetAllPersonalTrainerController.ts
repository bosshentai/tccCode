import { Roles } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";


export class GetAllPersonalTrainersController {
  async handle(request: Request, response: Response){
    try{

      const personalTrainers = await prismaClient.user.findMany({
        select:{
          id: true,
          name: true,
          email: true,
          personal_trainers:{
           select: {
            value: true
           }
          }
        },
        where:{
          role: Roles.PERSONALTRAINER
        }
      })


      return response.status(200).json(personalTrainers);

    }catch(e){
      const error = new HttpError("Couldn't get all Personal Trainer",404);
      return error
    }
  }
}