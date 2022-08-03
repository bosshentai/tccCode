import { CreateClientController } from '../controllers/CreateClientController';
import { Router } from "express";



const clientRouter = Router();


const createClient = new CreateClientController();


clientRouter.post("/client/add", createClient.handle);



export { clientRouter };