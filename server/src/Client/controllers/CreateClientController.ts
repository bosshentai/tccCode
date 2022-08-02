
import { Roles} from "@prisma/client";
import {Request, Response,NextFunction} from 'express';

import {prismaClient} from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";


export class CreateClientController {
  async handle( request: Request, response: Response, next: NextFunction){
    try {

      const {name, email, phone, CNI, NIF, birth} = request.body;

    }catch(e){
      const error = new HttpError("Fail to add Client",500);
      return next(error);
    }
  }
}






