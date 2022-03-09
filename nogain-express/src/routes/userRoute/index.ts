import { CreateEmployeeController } from '../../controllers/user/CreateEmployeeController';
import { Router } from "express";
import { getEmployeesController } from '../../controllers/user/getEmployeesController';


const employeeRouter = Router();


const createEmployee = new CreateEmployeeController()
const getEmployees = new getEmployeesController()

employeeRouter.post("/employee/add", createEmployee.handle);
employeeRouter.get("/employee/all", getEmployees.handle);


export { employeeRouter };