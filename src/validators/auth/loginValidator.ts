import { check } from 'express-validator';
import IValidator from '../IValidator';

const loginValidator: IValidator = () => {
    return [
        check('email').exists(),
        check('password').exists()
    ];
}

export default loginValidator;