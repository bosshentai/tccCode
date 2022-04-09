import { Router } from "express";
import { GetEmployeesController } from '../../controllers/user/GetEmployeesController';
import { CreateEmployeeController } from '../../controllers/user/CreateEmployeeController';
import { GetEmployeeByIdController } from '../../controllers/user/GetEmployeeByIdController';

const employeeRouter = Router();


const createEmployee = new CreateEmployeeController()
const getEmployees = new GetEmployeesController()
const getEmployeeById = new GetEmployeeByIdController()


employeeRouter.post("/employee/add", createEmployee.handle);
employeeRouter.get("/employee/all", getEmployees.handle);
 employeeRouter.get("/employee/:id", getEmployeeById.handle);


export { employeeRouter };