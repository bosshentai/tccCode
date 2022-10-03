import { NextFunction, Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'
import { HttpError } from '../../../models/http-error'

export class GetClientByIdController {
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

    let client

    try {
      client =  await prismaClient.client.findUnique({
        where:{
          id: id,
        },
        select:{
          user:{
            select:{
              name: true
              
            }
          }
        }
      })
    } catch (e) {
      const error = new HttpError(
        'Fail to Find Client by ID',
        500,
      )
      return next(error)
    }

    return response.status(200).json(client)
  }
}
