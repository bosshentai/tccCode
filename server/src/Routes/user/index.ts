import express from 'express'
import { LoginController } from '../../controllers/User/LoginController'

const userRouter = express.Router()

const login = new LoginController()

userRouter.post('/login', login.handle)

export { userRouter }
