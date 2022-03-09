import { Role} from "@prisma/client";


import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



export class getEmployeesController {
  async handle(request: Request, response: Response) {
      
      const employees = await prismaClient.user.findMany({
        where: {
          role: Role.EMPLOYEE
        }
      });
  
      return response.json(employees);
  
  }
}
