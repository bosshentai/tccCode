
import { Request, Response } from 'express';

import { prismaClient } from '../../database/prismaClient';

export class GetEmployeeByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const employee = await prismaClient.user.findUnique({
        where: {
          id: id,
        }
      }
      )


      return response.json(employee);
    } catch (e) {
      return response.status(400).json({ error: 'Unknown error' });
    }

  }

};