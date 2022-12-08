import { prismaClient } from '../../database/prismaClient'

export class GetAllEmployeesUseCase {
  async handle() {
    const data = await prismaClient.employee.findMany({
      select: {
        id: true,
        status: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    const employee =  data.map((item) => {
      return {
        id: item.id,
        status: item.status,
        name: item.user.name,
        email: item.user.email,
      }
    })

    return employee
  }
}
