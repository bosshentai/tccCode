import { Role} from "@prisma/client";


import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



export class getEmployeesController {
  async handle(request: Request, response: Response) {
      
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
  
  }
}
