import { Response } from 'express';
import { Request } from 'express-jwt';
import { error, success } from '../helpers/response';
import UserService from "../services/UserService";
import BaseController from "./Base";

class UserController extends BaseController {
    protected userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    getUsers = async (req: Request, res: Response) => {
        return success(res, await this.userService.getUsers());
    }

    register = async (req: Request, res: Response) => {
        this.checkValidationErrors(req);

        const registered = await this.userService.create(req.body);

        if (registered)
            return success(res, registered, 'User registered successfully');
        
        return error(res, 'Couldn\'t register user.');
    }
}

export default UserController;