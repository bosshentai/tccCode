import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";




export class GetAllDiscountsController {
  async handle(request: Request, response: Response) {
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