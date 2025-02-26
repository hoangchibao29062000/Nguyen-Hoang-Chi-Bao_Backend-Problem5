import { Request, Response, Router } from "express";
import resultSend from "../config/result";
import { fetchAllPlatforms } from "../services/platform.service";

const platformRouter = Router();

// Lấy tất cả sản phẩm
platformRouter.get(
  "/get-platform",
  async (req: Request, res: Response) => {
    try {
      const units = await fetchAllPlatforms(req);
      res.send(await resultSend.success(units.message, units.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default platformRouter;
