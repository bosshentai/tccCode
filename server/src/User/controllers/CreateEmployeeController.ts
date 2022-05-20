
// import { Role } from '@prisma/client';
import { Role } from '@prisma/client';
import { Request, Response } from 'express';

import { prismaClient } from '../../database/prismaClient';
// import



export class CreateEmployeeController {
  async handle(request: Request, response: Response) {

    const { name, email, phone, CNI, NIF, birth } = request.body;


    try {
      const client = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: "123456",
          phone: phone,
          role: Role.EMPLOYEE,
          CNI: CNI,
          NIF: NIF,
          birthDate: birth
        },
      });


      return response.status(201).json(client);


    } catch (e) {
      // console.log(e);
      return response.status(400);
    }


    // return response.status(400).json({ error: 'Unknown error' });

  }
}