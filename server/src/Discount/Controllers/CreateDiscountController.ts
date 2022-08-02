

import { Request, Response, NextFunction } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";




export class CreateDiscountController {
 
  async handle(request: Request, response:Response,next:NextFunction)
{
  try{

    const { name, value} = request.body;

    const discount = await prismaClient.discount.create({
      data:{
        name: name,
        value: Number(value)
      }
    })


    return response.status(201).json(discount);

  }catch(e){
    const error = new HttpError("Fail to add Discount",500);
    return next(error);
  }
}
}