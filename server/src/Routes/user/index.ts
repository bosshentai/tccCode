import { RefreshTokenUserController } from './../../controllers/token/RefreshTokenUserController';
import express from 'express'
import { LoginController } from '../../controllers/User/LoginController'

const userRouter = express.Router()

const login = new LoginController()

const refreshToken = new RefreshTokenUserController()


userRouter.post('/login', login.handle)


userRouter.post('/refreshToken',refreshToken.handle)

export { userRouter }
