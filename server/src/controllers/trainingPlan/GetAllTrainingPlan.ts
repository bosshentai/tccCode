import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";



export class GetAllTrainingPlansController {
  async handle(request: Request, response: Response) {

    try {

      const trainingplans = await prismaClient.training_plan.findMany({
        select: {
          id: true,
          name: true,
          value: true
        }
      })


      return response.status(200).json(trainingplans);

    } catch (e) {
      const error = new HttpError("couldn't get all Training Plans", 500);
      return error;
    }
  }
}