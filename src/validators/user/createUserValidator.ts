import { check } from 'express-validator';
import IValidator from '../IValidator';

const createUserValidator: IValidator = () => {
    return [
        check('name').exists().isLength({min: 3}),
        check('email').exists().isEmail(),
        check('password').exists().isLength({min: 8})
    ];
}

export default createUserValidator;