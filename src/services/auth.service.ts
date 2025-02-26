import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { ConnectDatabase } from './../config/database';
import { User } from "../models/user.model";
import { IReturnService } from "../entity/common.entity";
import { IUser } from "../entity/user.entity";
import returnService from "../helper/returnService.helper";
import { ENV } from "../config/env";

export async function fetchLogin(req: Request | any): Promise<IReturnService<IUser>> {
  const { username, password } = req.body;

  const user = await ConnectDatabase.getRepository(User)
    .createQueryBuilder("user")
    .where('user.username = :username', { username: username })
    .getOne();

  if (!user) {
    return returnService.forbidden("Tên đăng nhập không chính xác!!!");
  }

  const newUser = await ConnectDatabase.getRepository(User)
    .createQueryBuilder()
    .select(["username", "create_at", "update_at", "id"])
    .where('username = :username and password = md5(:password)', { username, password })
    .getRawOne();

  if (!newUser) {
    return returnService.forbidden("Mật khẩu không chính xác!!!");
  }

  const access_token = jwt.sign(newUser, ENV.SECRET_KEY, { expiresIn: "24h" });

  return returnService.success200(
    "Đăng nhập thành công",
    {
      access_token,
      user: newUser
    });
};
