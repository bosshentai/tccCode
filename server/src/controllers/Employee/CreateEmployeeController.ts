import { validationResult } from 'express-validator'

import { Roles } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'

import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { hash } from 'bcryptjs'
import { CreateEmployeeUseCase } from '../../useCases/Employee/CreateEmployeeUseCase'
// import

export class CreateEmployeeController {
  async handle(
    request: Request,
    response: Response,
  ):Promise<Response> {
    
    if (request.method !== 'POST') {
      
      return response.status(405).json("Method not allowed")
    }

    const errors = validationResult(request)

    if (!errors.isEmpty()) {
  
      return response
        .status(422)
        .json(
          'Invalid inputs passed,please check our data.',
        )
    }

    const { name, email, phone, CNI, NIF, birth } =
      request.body

    const createEmployeeUseCase =
      new CreateEmployeeUseCase()

    try {
      const newEmployee = createEmployeeUseCase.handle({
        name,
        email,
        phone,
        CNI,
        NIF,
        birth,
      })

      if(Object.keys(newEmployee).length === 0){
        // const error = new HttpError("Email is already used",500)
        // next(error)
        return response.status(500).json("Email is already used")
      }

      return response.status(201).json(newEmployee)
    } catch (e) {
      // const error = new HttpError("Couldn't register the Employee",500)
      //  next(error)
      return response
        .status(500)
        .json("Couldn't register the Employee")
    }
  }
}
