import { Router } from "express";
import { check } from "express-validator";
import { CreateDiscountController } from "../controllers/Discount/CreateDiscountController";
import { GetAllDiscountsController } from "../controllers/Discount/GetAllDiscount";
import { CreateEmployeeController } from "../controllers/Employee/CreateEmployeeController";
import { GetAllEmployeesController } from "../controllers/Employee/GetAllEmployeesController";
import { GetEmployeeByIdController } from "../controllers/Employee/GetEmployeeByIdController";
import { UpdateEmployeePhoneNumBerController } from "../controllers/Employee/UpdateEmployeePhoneNumberController";
import { CreateTrainingPlanController } from "../controllers/trainingPlan/CreateTrainingPlan";




const router = Router();


//Controllers

// Training plan
const createTrainingPlan = new CreateTrainingPlanController();
const getAllTrainingPlan = new GetAllDiscountsController();


// Personal Trainer
const createPersonalTrainer = new CreateTrainingPlanController();


// EmployeeRouter
const createEmployee = new CreateEmployeeController();
const getAllEmployees = new GetAllEmployeesController();
const getEmployeeById = new GetEmployeeByIdController();
const updateEmployeePhoneNumber = new UpdateEmployeePhoneNumBerController();



// Discount

const createDiscount = new CreateDiscountController();
const getDiscount = new GetAllDiscountsController();


//Post

router.post("/trainingplan/add", createTrainingPlan.handle);

router.post("/personalTrainer/add", createPersonalTrainer.handle);

router.post("/employee/add", [
  check('name').not().isEmpty(),
  check('email').not().isEmpty().isEmail(),
  check('phone').not().isEmpty(),
  check('CNI').not().isEmpty(),
  check('NIF').not().isEmpty()
], createEmployee.handle)



router.post("/discount/add", createDiscount.handle)


//Get

router.get("/trainingplan/all", getAllTrainingPlan.handle);


router.get("/employee/all", getAllEmployees.handle)
router.get("/employee/:id", getEmployeeById.handle)

router.get("/discount/all",getDiscount.handle)


// patch

router.patch("/employee/:id", updateEmployeePhoneNumber.handle)


export { router }