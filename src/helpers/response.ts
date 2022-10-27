import { Response } from 'express';

const response = (res: Response, status: boolean, code?: number, data?: any, message?: string) => {
    let c = status ? 200 : 400;

    return res
            .status(code ?? c)
            .json({
                status,
                data,
                message
            });
}

const success = (res: Response, data?: any, message?: string) => {
    return response(res, true, 200, data, message);
}

const error = (res: Response, data?: any, message?: string, code?: number) => {
    return response(res, false, code, data, message);
}

export {
    success, error
}