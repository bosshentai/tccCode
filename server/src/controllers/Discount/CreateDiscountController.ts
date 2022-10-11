import { validationResult } from 'express-validator'

import { Request, Response, NextFunction } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { CreateDiscountUseCase } from '../../useCases/Discount/CreateDiscountUseCase'

export class CreateDiscountController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    if (request.method !== 'POST') {
        // const error = new HttpError('Method not allowed', 405)
        // return next(error)
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

    const { name, value, description } = request.body

    const createDiscountUseCase =
      new CreateDiscountUseCase()

    try {

      const newDiscount = createDiscountUseCase.handle({
        name,
        description,
        value: Number(value)
      })


      return response.status(201).json(newDiscount)
    } catch (e) {
      return response
        .status(500)
        .json("Couldn't register the Discount")
    }

    // try{

    //   const discount = await prismaClient.discount.create({
    //     data:{
    //       name: name,
    //       description: description,
    //       value: Number(value)
    //     }
    //   })

    //   return response.status(201).json(discount);

    // }catch(e){
    //   const error = new HttpError("Fail to add Discount",500);
    //   return next(error);
    // }
  }
}
