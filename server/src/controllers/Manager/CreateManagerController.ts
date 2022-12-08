import { Request, NextFunction, Response } from 'express'
import { validationResult } from 'express-validator'
import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { CreateManagerUseCase } from '../../useCases/Manager/CreateManagerUseCase'

export class CreateManagerController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    if (request.method !== 'POST') {
      return response.status(405).json("Method not allowed");
      // const error = new HttpError("Method not allowed", 405);
      // return next(error);
    }

    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return response
        .status(422)
        .json(
          'Invalid inputs passed, please chech our data. ',
        )
    }

    const { name, email, phone, CNI, NIF, birth } =
      request.body

    const createManagerUseCase = new CreateManagerUseCase()

    try {
      const newManager = await createManagerUseCase.handle({
        name,
        email,
        phone,
        CNI,
        NIF,
        birth,
      })

      if (Object.keys(newManager).length === 0) {
        return response
          .status(500)
          .json('Email is already used')
      }

      return response.status(201).json(newManager)

      // return response.status(201).json(manager)
    } catch (e) {
      return response
        .status(500)
        .json("couldn't register the Manager")
      // const error = new HttpError("Fail to add Manager", 500)

      // return next(error);
    }
  }
}
