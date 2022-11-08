import { prismaClient } from '../../database/prismaClient'
import { IGetEmployeeByIdDTO } from './../../repositories/dto/Employee/IGetEmployeeByIdDTO'

export class GetEmployeeByIdUseCase {
  async handle({ id }: IGetEmployeeByIdDTO) {
    const employeeData =
      await prismaClient.employee.findUnique({
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
      })

    if (!employeeData) {
      throw new Error('Employee ID not found')
    }

    const employee = {
      name : employeeData.user.name,
      email: employeeData.user.email,
      birth: employeeData.user.birth_date,
      phone: employeeData.user.phone,
      CNI: employeeData.user.CNI,
      NIF: employeeData.user.NIF
    }



    return employee
  }
}
