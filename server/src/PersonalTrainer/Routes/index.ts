import { Router} from "express";
import { CreatePersonalTrainerController } from "../controllers/CreatePersonalTrainerController";




const personalTrainerRouter = Router();


const createPersonalTrainerRouter =  CreatePersonalTrainerController;


personalTrainerRouter.post("/personalTrainer/add",createPersonalTrainerRouter);


export { personalTrainerRouter};


