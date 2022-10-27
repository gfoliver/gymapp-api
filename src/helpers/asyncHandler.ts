import {Response, NextFunction} from 'express';
import { Request } from 'express-jwt';

const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => {
    return Promise
            .resolve(fn(req, res))
            .catch(next);
}

export default asyncHandler;