import { Request, Response, Router } from "express";
import resultSend from "../config/result";
import { fetchLogin } from "../services/auth.service";
import { v4 as uuidv4 } from 'uuid';

const authRouter = Router();

// Lấy tất cả sản phẩm
authRouter.post(
  "/login",
  async (req: Request, res: Response) => {
    try {
      const user = await fetchLogin(req);
      res.send(await resultSend.success(user.message, user.data, user.status));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

authRouter.get(
  "/get-id",
  async (req: Request, res: Response) => {
    try {
      const { num } = req.query;
      const arr = [];
      for (let index = 0; index < Number(num); index++) {
        arr.push(uuidv4())
      }
      res.send(await resultSend.success("thanh công", arr));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default authRouter;
