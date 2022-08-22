import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../../../database/prismaClient';
import { HttpError } from '../../../models/http-error';



export class GetAllClientController {
  async handle(request:Request, response: Response, next: NextFunction){
    
    if (request.method !== "GET"){
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }


    try {
      
      const clients = await prismaClient.client.findMany({
        select:{
          id: true,
          user:{
            select:{
              name: true
            }
          }
        }
      })


      return response.status(200).json(clients);

    } catch (e) {
      const error = new HttpError("couldn't get all Clients",500);
      return next(error);
    }


  }
}