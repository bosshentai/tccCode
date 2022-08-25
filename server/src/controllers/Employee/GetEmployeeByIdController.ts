import { Request, Response, NextFunction } from 'express'

import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'

export class GetEmployeeByIdController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (request.method !== 'GET') {
      const error = new HttpError('Method not allowed', 405)
      return next(error)
    }

    const { id } = request.params

    let employee

    try {
      employee = await prismaClient.employee.findUnique({
        where: {
          id: id,
        },
        select: {
          user: {
            select: {
              name: true,
              email: true,
              birth_date: true,
              phone: true,
              CNI: true,
              NIF: true,
            },
          },
        },
      })

      // employee = await prismaClient.user.findUnique({
      //   where: {
      //     id: id,
      //   },
      // })
    } catch (err) {
      const error = new HttpError(
        'Fail to Find Employee by ID',
        500,
      )

      return next(error)
      // return response.status(400).json({ error: 'Unknown error' });
    }

    return response.status(200).json(employee)
  }
}
