import {Router} from 'express'
import * as userController from '../controllers/user.js'
import { validateUserRegister } from '../shared/middleware/validation/validateRegister.js';

const router = Router();

router.post("/register",validateUserRegister,userController.register)
router.post("/login",userController.login)

export { router }