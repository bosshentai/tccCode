
// import { Role } from '@prisma/client';
import { Role } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

import { prismaClient } from '../../database/prismaClient';
import { HttpError } from '../../models/http-error';
// import



export class CreateEmployeeController {
  async handle(request: Request, response: Response, next: NextFunction) {

    try {

      const { name, email, phone, CNI, NIF, birth } = request.body;


      const employee = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "123456",
          phone: phone,
          role: Role.EMPLOYEE,
          CNI: CNI,
          NIF: NIF,
          birthDate: new Date(birth) // convert the String in Date
        },
      });


      return response.status(201).json(employee);


    } catch (e) {

      const error = new HttpError("Fail to add employeed", 500)

      return next(error);
    }




  }
}