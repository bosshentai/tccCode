
import { Request, Response, NextFunction } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';






export class CreateTrainingPlanController {
  async handle(request: Request, response: Response, next: NextFunction) {


    try {
      const { name, description, value } = request.body;

      const trainingPlan = await prismaClient.training_plan.create({
        data: {
          name: name,
          description: description,
          value: Number(value)
        }
      })

      return response.status(201).json(trainingPlan);

    } catch (e) {
      const error = new HttpError("Fail to add TrainingPlan", 500);
      return next(error)
    }
  }
}







