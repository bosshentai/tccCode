import { Employee } from '../../entities/Employee'

interface IEmployeeRepository {
  create(employee: Employee): Promise<Employee>
  emailExists(email: string): Promise<boolean>
  nifExists(nif:string): Promise<boolean>
  cniExists(cni:string): Promise<boolean>

}

export { IEmployeeRepository }
