import {Router} from 'express'
import * as userController from '../controllers/user.js'
import { validateRequest } from '../shared/middleware/validation/validateRequest.js';
import { userRegisterSchema } from '../shared/validationSchema/userValidationSchema/userRegisterSchema.js';
import { userLoginSchema } from '../shared/validationSchema/userValidationSchema/userLoginSchema.js';

const router = Router();

router.post("/register",validateRequest(userRegisterSchema),userController.register)
router.post("/login",validateRequest(userLoginSchema),userController.login)

export { router }