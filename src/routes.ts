import { Router, Response, NextFunction } from 'express';
import asyncHandler from './helpers/asyncHandler';
import createUserValidator from './validators/user/createUserValidator';
import { middleware as requireAuth } from './helpers/jwt';
import { Request } from 'express-jwt';
import container from './container';

const router = Router();

router.use(requireAuth.unless({ path: ["/auth"] }));

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.auth);
    next();
}, container.resolve('userController').getUsers);

router.post('/user', createUserValidator(), asyncHandler(container.resolve('userController').register));

router.post('/user', asyncHandler(container.resolve('userController').register));

router.post('/auth', asyncHandler(container.resolve('userController').login));

export default router;