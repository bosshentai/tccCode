import { Employees } from '../../../models/Employee/Employee';

export interface CreateEmployeeUseCase{
  create(employeeData:Employees): Promise<Employees> | never;
}