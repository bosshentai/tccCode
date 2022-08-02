import { Router} from "express";
import { CreatePersonalTrainerController } from "../controllers/CreatePersonalTrainerController";




const personalTrainerRouter = Router();


const createPersonalTrainerRouter = new CreatePersonalTrainerController();


personalTrainerRouter.post("/personalTrainer/add",createPersonalTrainerRouter.handle);


export { personalTrainerRouter};


