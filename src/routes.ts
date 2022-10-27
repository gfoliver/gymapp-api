import { Router, Response, NextFunction } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';
import asyncHandler from './helpers/asyncHandler';
import createUserValidator from './validators/user/createUserValidator';
import { middleware as requireAuth } from './helpers/jwt';
import { Request } from 'express-jwt';

const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.use(requireAuth.unless({ path: ["/auth"] }));

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.auth);
    next();
}, userController.getUsers);

router.post('/user', createUserValidator(), asyncHandler(userController.register));

router.post('/user', asyncHandler(userController.register));

router.post('/auth', asyncHandler(authController.login));

export default router;