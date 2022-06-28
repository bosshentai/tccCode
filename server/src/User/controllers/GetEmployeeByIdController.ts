
import { Request, Response, NextFunction } from 'express';

import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';

export class GetEmployeeByIdController {
  async handle(request: Request, response: Response, next:NextFunction) {
    const { id } = request.params;

    try {
      const employee = await prismaClient.user.findUnique({
        where: {
          id: id,
        }
      }
      )


      return response.json(employee);
    } catch (err) {

      const error = new HttpError("Fail to Find Employeed by ID", 500);

      return next(error);
      // return response.status(400).json({ error: 'Unknown error' });
    }

  }

};