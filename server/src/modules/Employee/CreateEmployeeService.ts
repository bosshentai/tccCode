import { Employee } from '../../entities/Employee'
import { Role } from '../../entities/Role/Role'
import { IEmployeeRepository } from '../../repositories/interfaces/IEmployeeRepository'
import { employees } from '../../../prisma/dataTest/employee'

interface IEmployeeRequest {
  name: string
  email: string
  birth: Date
  // roles: Role
  phone: string
  cni: string
  nif: string
}

class CreateEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository,
  ) {}

  async execute({
    name,
    email,
    birth,
    phone,
    cni,
    nif,
  }: IEmployeeRequest) {
    const emailAlreadyExists =
      await this.employeeRepository.emailExists(email)

    if (emailAlreadyExists) {
      throw new Error('email already exists!')
    }

    const cniAlreadyExists =
      await this.employeeRepository.cniExists(cni)
    if (cniAlreadyExists) {
      throw new Error('cni already exists!')
    }

    const nifAlreadyExists =
      await this.employeeRepository.nifExists(nif)
    if (nifAlreadyExists) {
      throw new Error('nif already exists!')
    }

    const employeeCreate = Employee.create({
      name,
      email,
      birth: new Date(birth),
      phone,
      cni,
      nif,
    })

    const employee = await this.employeeRepository.create(
      employeeCreate,
    )
    return employee
  }
}
export { CreateEmployeeService }
