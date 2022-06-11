
import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';


export class UpdateEmployeePhoneNumBerController {
  async handle(request: Request, response: Response) {
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

      return response.status(500);
    }

    // 
    if (employee?.id != id) {
      return response.status(404);
    }





    try {
      const updated = await prismaClient.user.update(
        {
          where: {
            id: id
          },
          data: {
            phone: phone
          }
        })

        return response.status(200).json(updated);

    }catch(err){
      return response.status(404);
    }
    


  }
}