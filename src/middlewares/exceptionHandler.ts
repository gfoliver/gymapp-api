import { Response, NextFunction } from 'express';
import { Request } from 'express-jwt';
import { UnauthorizedError } from 'express-jwt';
import { error } from '../helpers/response';
import AppError from '../validators/AppError';
import ValidationError from '../validators/ValidationError';

const exceptionHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError) {
        return error(res, err.data, err.message, err.code);
    }

    if (err instanceof AppError) {
        return error(res, null, err.message, 400);
    }

    if (err instanceof UnauthorizedError) {
        return error(res, null, err.message, 401);
    }

    return error(res, null, 'Server Error', 500);
}

export default exceptionHandler;