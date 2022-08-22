import { Roles } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";


export class CreatePersonalTrainerController {
  async handle(request: Request, response: Response, next: NextFunction) {


    if (request.method !== "POST"){
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }



    try {
      const { name, email, phone, CNI, NIF, birth, value } = request.body;

      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "123456",
          phone: phone,
          role: Roles.PERSONALTRAINER,
          CNI: CNI,
          NIF: NIF,
          birth_date: new Date(birth)
        },
      })




      const personalTrainer = await prismaClient.personalTrainer.create({
        data: {
          user_id: user.id,
          value: Number(value)
        },
      })


      return response.status(201).json(user);

    } catch (e) {
      const error = new HttpError("Fail to add Personal Trainer", 500);
      return next(error);
    }
  }
}




// import {Role} from '@prisma/client';
// import { Request, Response, NextFunction} from "express";

// import { prismaClient } from '../../database/prismaClient';
// import { HttpError} from '../../models/http-error';

// export const CreatePersonalTrainerController = async (request: Request,response:Response,next:NextFunction) => {


//   try {

//     const { name , email, phone, CNI, NIF, birth} = request.body;

//     const personalTrainer = await prismaClient.personalTrainer.create({
//       data:{
//         name: name,
//         email: email,
//         phone: phone,
//         CNI: CNI,
//         NIF: NIF,
//         birthDate: birth
//       }
//     })

//     return response.status(201).json(personalTrainer);

//   }catch(e) {
//     const error = new HttpError("Fail to add Personal Trainer",500);

//     return next(error);

//   }
// } 



