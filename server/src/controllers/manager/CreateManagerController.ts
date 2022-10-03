import { Request,NextFunction, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";




export class CreateManagerController {
  async handle(request: Request,response:Response, next:NextFunction){

    if (request.method !== "POST"){
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }



    try{

      const {id} = request.body;

      const manager = await prismaClient.manager.create({
        data:{
          user_id: id
        }
      })

      return response.status(201).json(manager);

    } catch(e){
      const error = new HttpError("Fail to add Manager", 500)

      return next(error);
    }
  }
}