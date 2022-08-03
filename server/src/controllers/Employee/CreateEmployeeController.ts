
// import { Role } from '@prisma/client';
import { Roles } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';
// import



export class CreateEmployeeController {
  async handle(request: Request, response: Response, next: NextFunction) {

    try {

      const { name, email, phone, CNI, NIF, birth } = request.body;


      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "123456",
          phone: phone,
          role: Roles.EMPLOYEE,
          CNI: CNI,
          NIF: NIF,
          birth_date: new Date(birth) // convert the String in Date
        },
      });


      const employee = await prismaClient.employee.create({
        data: {
          user_id : user.id
          
        },
      })


      return response.status(201).json(employee);


    } catch (e) {

      const error = new HttpError("Fail to add Employee", 500)

      return next(error);
    }




  }
}