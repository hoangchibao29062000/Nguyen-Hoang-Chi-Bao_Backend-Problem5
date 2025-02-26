import { Request, Response, Router } from "express";
import resultSend from "../config/result";
import { fetchAllUnits } from "../services/unit.service";

const unitRouter = Router();

// Lấy tất cả sản phẩm
unitRouter.get(
  "/get-unit",
  async (req: Request, res: Response) => {
    try {
      const units = await fetchAllUnits(req);
      res.send(await resultSend.success(units.message, units.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default unitRouter;
