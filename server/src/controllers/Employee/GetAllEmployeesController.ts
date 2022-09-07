import { Employee, prisma, Roles, Status } from "@prisma/client";


import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { HttpError } from "../../models/http-error";





export class GetAllEmployeesController {
  async handle(request: Request, response: Response, next: NextFunction) {

    if (request.method !== "GET"){
      const error = new HttpError("Method not allowed", 405)
      return next(error);
    }

    try {

      const employees = await prismaClient.employee.findMany({
        select: {
          id: true,
          status: true,
          user:{
            select:{
              name: true,
              email: true,

            }
          }

        }
      })
      // const employees = await prismaClient.user.findMany({
      //   select: {
      //     id: true,
      //     name: true,
      //     email: true,
      //     employee: {
      //       select: {
      //         status: true
      //       }
      //     }
      //   },
      //   where: {
      //     role: Roles.EMPLOYEE
      //   },
      // });

      return response.json(employees);

    } catch (e) {
      return response.status(400).json({ error: "Unknown error" });
    }

  }
}