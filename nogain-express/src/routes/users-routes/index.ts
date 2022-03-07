import { CreateProductController } from './../../controllers/CreateUserController';
import { Router} from "express";


const router = Router();



const createUser = new CreateProductController()

router.post("/user",createUser.handle);


export { router} ;