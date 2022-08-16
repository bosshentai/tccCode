import { Employee, prisma, Roles, Status } from "@prisma/client";


import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";





type EmployeeType = {
  id: string
  name: string
  email: string
  role: Employee
  status: string
}

const SELECT = "SELECT";
const USERS = "users";
const EMPLOYEES = "employees"
const ID = "id";
const NAME = "name";
const EMAIL = "email";
const STATUS = "status";






export class GetAllEmployeesController {
  async handle(request: Request, response: Response) {

    try {
      const employees = await prismaClient.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          employee: {
            select: {
              status: true
            }
          }
        },
        where: {
          role: Roles.EMPLOYEE
        },
      });

      return response.json(employees);

    } catch (e) {
      return response.status(400).json({ error: "Unknown error" });
    }

  }
}
