import { prismaClient } from '../../database/prismaClient'
import { IGetEmployeeByIdDTO } from './../../repositories/dto/Employee/IGetEmployeeByIdDTO'

export class GetEmployeeByIdUseCase {
  async handle({ id }: IGetEmployeeByIdDTO) {
    const employee = await prismaClient.employee.findUnique(
      {
        where: {
          id,
        },
        select: {
          user: {
            select: {
              name: true,
              email: true,
              birth_date: true,
              phone: true,
              CNI: true,
              NIF: true,
            },
          },
        },
      },
    )

    if(!employee){
      throw new Error("Employee ID not found")
    }


    return employee
  }
}
