
import { Request, Response, NextFunction} from 'express';

import {prismaClient} from "../../database/prismaClient";
import { HttpError } from '../../models/http-error';



export const GetPersonalTrainerByIdController = async (request: Request, response: Response, next: NextFunction) => {

  const { id } = request.params;

  try{
    const personalTrainer = await prismaClient.personalTrainer.findUnique({
      where:{
        id: id,
      }
    })

    return response.status(200).json(personalTrainer)
  } catch(err){

    const error = new HttpError("Fail to Find Personal Trainer by ID",500);

    return next(error);

  }

}


