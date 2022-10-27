import { Response } from 'express';
import { Request } from 'express-jwt';
import { compare } from '../helpers/hashing';
import { error, success } from '../helpers/response';
import UserService from "../services/UserService";
import AppError from '../validators/AppError';
import BaseController from "./Base";
import { sign } from '../helpers/jwt';

class AuthController extends BaseController {
    protected userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    login = async (req: Request, res: Response) => {
        const {email, password} = req.body;

        const existingUser = await this.userService.byEmail(email);

        if (!existingUser)
            throw new AppError('Incorrect email/password combination');

        const correctPassword = await compare(password, existingUser.password);

        if (! correctPassword)
            throw new AppError('Incorrect email/password combination');
        
        return success(res, { token: sign(existingUser) });
    }
}

export default AuthController;