import { Roles } from '@prisma/client'
import { prismaClient } from '../../../database/prismaClient'
import { Employee } from '../../../entities/Employee'
import { IEmployeeRepository } from '../../interfaces/IEmployeeRepository'
import { hash } from 'bcryptjs'

class PrismaEmployeeRepository
  implements IEmployeeRepository
{
  async emailExists(email: string): Promise<boolean> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })

    return !!user
  }

  async nifExists(nif: string): Promise<boolean> {
    const user = await prismaClient.user.findFirst({
      where: {
        nif,
      },
    })

    return !!user
  }

  async cniExists(cni: string): Promise<boolean> {
    const user = await prismaClient.user.findFirst({
      where: {
        cni,
      },
    })

    return !!user
  }
  async create({
    name,
    email,
    phone,
    cni,
    nif,
    birth,
  }: Employee): Promise<Employee> {
    const hashedPassword = await hash('1234', 12)

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        cni,
        nif,
        role: Roles.EMPLOYEE,
        birth: new Date(birth),
        employee: {
          create: {},
        },
      },
    })

    const employee: Employee = {
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      cni: newUser.cni !== null ? newUser.cni : '',
      nif: newUser.nif !== null ? newUser.nif : '',
      birth: newUser.birth,
    }
    return employee
  }
}
