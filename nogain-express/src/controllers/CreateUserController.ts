
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';



export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, email, telephone } = request.body;

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        telefone:telephone
      },
    });

    return response.json(user);
  }
}