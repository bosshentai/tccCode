import { validationResult } from 'express-validator'

import { Roles } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'

import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { hash } from 'bcryptjs'
// import

export class CreateEmployeeController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {

    let employee
    if (request.method !== 'POST') {
      const error = new HttpError('Method not allowed', 405)
      return next(error)
    }

    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return next(
        new HttpError(
          'Invalid inputs passed,please check our data.',
          422,
        ),
      )
    }

    const { name, email, phone, CNI, NIF, birth } =
      request.body

    // let existingUser

    // try {
    //   existingUser = await prismaClient.user.findUnique({
    //     where: {
    //       email: email,
    //     },
    //   })
    // } catch (e) {
    //   const error = new HttpError(
    //     "Couldn't register the User email",
    //     500,
    //   )
    //   return next(error)
    // }

    // if (existingUser) {
    //   const error = new HttpError(
    //     'User exists already',
    //     422,
    //   )
    //   return next(error)
    // }

    // try {
    // } catch (e) {
    //   const error = new HttpError(
    //     "Couldn't register the Employee",
    //     500,
    //   )
    //   return next(error)
    // }

    let hashedPassword

    try {
      // password
      hashedPassword = await hash('123456', 12)
    } catch (e) {
      const error = new HttpError(
        'Could not create Employee,please try again',
        500,
      )
      return next(error)
    }

    try {

      employee =  await prismaClient.user.create({
       data:{ 
        name: name,
        email: email,
        password: hashedPassword,
        phone: phone,
        role: Roles.EMPLOYEE,
        CNI: CNI,
        NIF: NIF,
        birth_date: new Date(birth),
        employee:{
          create:{}
        }
       }
      })
      // const user = await prismaClient.user.create({
      //   data: {
      //     name: name,
      //     email: email,
      //     password: hashedPassword,
      //     phone: phone,
      //     role: Roles.EMPLOYEE,
      //     CNI: CNI,
      //     NIF: NIF,
      //     birth_date: new Date(birth), // convert the String in Date
      //   },
      // })

      // const employee = await prismaClient.employee.create({
      //   data: {
      //     user_id: user.id,
      //   },
      // })

      // return response.status(201).json(employee)
    } catch (e) {
      const error = new HttpError(
        'Fail to add Employee',
        500,
      )

      return next(error)
    }

    return response.status(201).json(employee)
  }
}
