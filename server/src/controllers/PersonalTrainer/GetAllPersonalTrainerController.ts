import { Roles } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'

export class GetAllPersonalTrainersController {
  async handle(request: Request, response: Response) {
    if (request.method !== 'GET') {
      const error = new HttpError('Method not allowed', 405)
      return error
    }

    try {
      // const personalTrainers = await prismaClient.user.findMany({
      //   select:{
      //     // id: true,
      //     name: true,
      //     email: true,
      //     personal_trainers:{
      //      select: {
      //       id:true,
      //       value: true
      //      }
      //     }
      //   },
      //   where:{
      //     role: Roles.PERSONALTRAINER
      //   }
      // })

      const data =
        await prismaClient.personalTrainer.findMany({
          select: {
            id: true,
            value: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        })

   const personalTrainers = data.map( (item) =>{
    return {
      id: item.id,
      name: item.user.name,
      email: item.user.email,
      value: item.value
    }
   })


      return response.status(200).json(personalTrainers)
    } catch (e) {
      const error = new HttpError(
        "Couldn't get all Personal Trainer",
        404,
      )
      return error
    }
  }
}
