import { GetTrainingPlanByIdController } from './../controllers/trainingPlan/GetTrainingPlanByIdController'
import { GetDiscountByIdController } from './../controllers/Discount/GetDiscountByIdController'
import { GetUserByIdController } from './../controllers/User/GetUserbyIdController'
import { CreatePaymentController } from './../controllers/payment/CreatePaymentController'
import { GetAllClientController } from './../controllers/Client/controllers/GetAllClientController'
import { GetAllTrainingPlansController } from './../controllers/trainingPlan/GetAllTrainingPlan'
import { GetAllPersonalTrainersController } from './../controllers/PersonalTrainer/GetAllPersonalTrainerController'
import { Router } from 'express'
import { check } from 'express-validator'
import { CreateDiscountController } from '../controllers/Discount/CreateDiscountController'
import { GetAllDiscountsController } from '../controllers/Discount/GetAllDiscountController'
import { CreateEmployeeController } from '../controllers/Employee/CreateEmployeeController'
import { GetAllEmployeesController } from '../controllers/Employee/GetAllEmployeesController'
import { GetEmployeeByIdController } from '../controllers/Employee/GetEmployeeByIdController'
import { UpdateEmployeePhoneNumBerController } from '../controllers/Employee/UpdateEmployeePhoneNumberController'
import { CreateTrainingPlanController } from '../controllers/trainingPlan/CreateTrainingPlan'
import { CreateClientController } from '../controllers/Client/controllers/CreateClientController'
import { CreatePersonalTrainerController } from '../controllers/PersonalTrainer/CreatePersonalTrainerController'
import { GetClientByIdController } from '../controllers/Client/controllers/GetClientByIdController'
import { GetAllEmailUserController } from '../controllers/User/GetAllEmailController'
import { CreateManagerController } from '../controllers/Manager/CreateManagerController'

const router = Router()

//Controllers

//Manager
const createManager = new CreateManagerController()

//User
const getAllUserEmail = new GetAllEmailUserController()
const getUserByIdInfo = new GetUserByIdController()

// Training plan
const createTrainingPlan =
  new CreateTrainingPlanController()
const getAllTrainingPlan =
  new GetAllTrainingPlansController()
const getTrainingPlanById =
  new GetTrainingPlanByIdController()

// Personal Trainer
const createPersonalTrainer =
  new CreatePersonalTrainerController()
const getAllPersonalTrainer =
  new GetAllPersonalTrainersController()

// EmployeeRouter
const createEmployee = new CreateEmployeeController()
const getAllEmployees = new GetAllEmployeesController()
const getEmployeeById = new GetEmployeeByIdController()
const updateEmployeePhoneNumber =
  new UpdateEmployeePhoneNumBerController()

// Discount

const createDiscount = new CreateDiscountController()
const getDiscount = new GetAllDiscountsController()
const getDiscountById = new GetDiscountByIdController()

// Client

const createClient = new CreateClientController()
const getAllClients = new GetAllClientController()
const getClientById = new GetClientByIdController()

// Payment

const createPayment = new CreatePaymentController()

//Post

router.post('/manager/add', createManager.handle)

router.post('/trainingplan/add', createTrainingPlan.handle)

router.post(
  '/personalTrainer/add',
  createPersonalTrainer.handle,
)

router.post(
  '/employee/add',
  [
    check('name').not().isEmpty(),
    check('email').not().isEmpty().isEmail(),
    check('phone').not().isEmpty(),
    check('CNI').not().isEmpty(),
    check('NIF').not().isEmpty(),
  ],
  createEmployee.handle,
)

router.post('/discount/add', createDiscount.handle)

router.post('/client/add', createClient.handle)

router.post('/payment/add', createPayment.handle)

//Get

router.get('/user/allemail', getAllUserEmail.handle)
router.get('/user/:id', getUserByIdInfo.handle)

router.get('/trainingplan/all', getAllTrainingPlan.handle)
router.get('/trainingplan/:id',getTrainingPlanById.handle)

router.get('/employee/all', getAllEmployees.handle)
router.get('/employee/:id', getEmployeeById.handle)

router.get('/discount/all', getDiscount.handle)
router.get('/discount/:id', getDiscountById.handle)

router.get(
  '/personalTrainer/all',
  getAllPersonalTrainer.handle,
)

router.get('/client/all', getAllClients.handle)
router.get('/client/:id', getClientById.handle)

// patch

router.patch(
  '/employee/:id',
  updateEmployeePhoneNumber.handle,
)

export { router }
