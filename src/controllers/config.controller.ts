import { Request, Response, Router } from "express";
import resultSend from "../config/result";
import { fetchAllConfig } from "../services/config.service";

const configRouter = Router();

// Lấy tất cả sản phẩm
configRouter.get(
  "/get-config",
  async (req: Request, res: Response) => {
    try {
      const configs = await fetchAllConfig(req);
      res.send(await resultSend.success(configs.message, configs.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default configRouter;
