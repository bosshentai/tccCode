import { CreateClientController } from './../../Client/controllers/CreateClientController';
import { Router } from "express";


const trainingPlanRouter = Router();


const createTrainingPLan = new CreateClientController();

trainingPlanRouter.post("/training/add", createTrainingPLan.handle);


export { trainingPlanRouter }