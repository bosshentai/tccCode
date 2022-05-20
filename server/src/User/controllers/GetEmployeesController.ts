import { Role } from "@prisma/client";


import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



export class GetEmployeesController {
  async handle(request: Request, response: Response) {

    try{
      const employees = await prismaClient.user.findMany({
        select:{
          id: true,
          name: true,
          email: true,
          status: true,
        },
        where: {
          role: Role.EMPLOYEE
        }
      });

      return response.json(employees);

    } catch (e) {
      return response.status(400).json({ error: "Unknown error" });
    }
  
  }
}
