
import { Request, Response, NextFunction } from 'express';
import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';


export class UpdateEmployeePhoneNumBerController {
  async handle(request: Request, response: Response, next: NextFunction) {


    const { phone } = request.body;
    const { id } = request.params;


    let employee;
    try {
      employee = await prismaClient.user.findUnique(
        {
          where: {
            id: id,
          }
        }
      )
    } catch (err) {

      const error = new HttpError("Something went wrong, could not update employee",500);

      return next(error);
      // return response.status(500);
    }

    // // 
    // if (employee?.id != id) {
    //   const error = new Htt
    //   // return response.status(404);
    // }






    try {
      const updatedPhone = await prismaClient.user.update(
        {
          where: {
            id: id
          },
          data: {
            phone: phone
          }
        })

        return response.status(200).json(updatedPhone);

    }catch(err){
      const error = new HttpError("Something went wrong, could not update place.", 500);
      return next(error);
    }
    

    
  }
}