import { Employee } from "../../entities/Employee";
import { IEmployeeRepository } from "../interfaces/IEmployeeRepository";
import {v4 as uuid} from "uuid";
import { employees } from '../../../prisma/dataTest/employee';


// class EmployeesRepositoryInMemory implements IEmployeeRepository{

//   constructor(private employeesRepository: IEmployeeRepository) {}

//   async execute({}){

//   }
// }