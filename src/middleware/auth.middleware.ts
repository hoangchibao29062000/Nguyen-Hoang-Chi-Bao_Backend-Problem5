import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import resultSend from '../config/result';
import { ENV } from '../config/env';
import returnService from '../helper/returnService.helper';

export async function authMiddleware(req: Request | any, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    const result = returnService.forbidden("Bạn không có quyền truy cập");
    res.send(await resultSend.success(result.message, undefined, result.status));
  } else {
    try {
      const decoded = jwt.verify(token, ENV.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      const result = returnService.forbidden("Bạn không có quyền truy cập");
      res.send(await resultSend.success(result.message, undefined, result.status));
    }
  }
};
