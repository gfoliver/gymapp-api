import { Request } from 'express-jwt';
import { validationResult } from 'express-validator';
import ValidationError from '../validators/ValidationError';

class BaseController {
    protected checkValidationErrors = (req: Request) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            throw new ValidationError(errors.array());
        }
    }
}

export default BaseController;