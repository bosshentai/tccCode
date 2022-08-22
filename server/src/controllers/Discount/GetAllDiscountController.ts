import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";




export class GetAllDiscountsController {
  async handle(request: Request, response: Response, next: NextFunction) {

    if (request.method !== "GET"){
      const error = new HttpError("Method not allowed", 405);
      return next(error);
    }



    try {

      const discounts = await prismaClient.discount.findMany({
        select: {
          id: true,
          name: true,
          value: true

        }
      })

      return response.status(200).json(discounts);

    } catch (e) {
      const error = new HttpError("couldn't get all Discounts", 500);
      return error
    }
  }
}