import { Router } from "express";
import { check } from "express-validator";
import { CreateEmployeeController } from "../controllers/CreateEmployeeController";
import { GetEmployeeByIdController } from "../controllers/GetEmployeeByIdController";
import { GetEmployeesController } from '../controllers/GetEmployeesController';
import { UpdateEmployeePhoneNumBerController } from "../controllers/UpdateEmployeePhoneNumberController";

const employeeRouter = Router();


const createEmployees = new CreateEmployeeController()
const getEmployees = new GetEmployeesController()
const getEmployeeById = new GetEmployeeByIdController()
const updateEmployeePhoneNumber = new UpdateEmployeePhoneNumBerController();

employeeRouter.post("/employee/add", [
  check('name')
    .not()
    .isEmpty(),
  check('email')
    .not()
    .isEmpty()
    .isEmail(),
  check('phone')
    .not()
    .isEmpty(),
    // .isMobilePhone(locale)
  check('CNI')
    .not()
    .isEmpty(),
  check('NIF')
    .not()
    
], createEmployees.handle);
employeeRouter.get("/employee/all", getEmployees.handle);
employeeRouter.get("/employee/:id", getEmployeeById.handle);
employeeRouter.patch("/employee/:id", updateEmployeePhoneNumber.handle);





export { employeeRouter };