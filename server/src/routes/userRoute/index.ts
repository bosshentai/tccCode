import { Router } from "express";
import { CreateEmployeeController } from "../../User/controllers/CreateEmployeeController";
import { GetEmployeeByIdController } from "../../User/controllers/GetEmployeeByIdController";
import { GetEmployeesController } from '../../User/controllers/GetEmployeesController';
import { UpdateEmployeePhoneNumBerController } from "../../User/controllers/UpdateEmployeePhoneNumberController";

const employeeRouter = Router();


const createEmployee = new CreateEmployeeController()
const getEmployees = new GetEmployeesController()
const getEmployeeById = new GetEmployeeByIdController()
const updateEmployeePhoneNumber = new UpdateEmployeePhoneNumBerController();


employeeRouter.post("/employee/add", createEmployee.handle);
employeeRouter.get("/employee/all", getEmployees.handle);
employeeRouter.get("/employee/:id", getEmployeeById.handle);
employeeRouter.patch("employee/:id", updateEmployeePhoneNumber.handle);


export { employeeRouter };