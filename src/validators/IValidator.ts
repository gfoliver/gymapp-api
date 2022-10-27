import { ValidationChain } from 'express-validator';

type IValidator = () => ValidationChain[];

export default IValidator;