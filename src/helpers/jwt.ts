import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';

const secret = process.env.JWT_SECRET || 'secret';

const sign = (user: User) => {
    return jwt.sign({id: user.id, email: user.email}, secret, {
        expiresIn: '1h',
        algorithm: 'HS256'
    });
}

const verify = (token: string) => {
    return jwt.verify(token, secret);
}

const middleware = expressjwt({ secret, algorithms: ['HS256'] });

export { sign, verify, middleware };