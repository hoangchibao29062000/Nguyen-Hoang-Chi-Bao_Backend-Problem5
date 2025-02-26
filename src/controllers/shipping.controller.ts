import { Request, Response, Router } from "express";
import resultSend from "../config/result";
import { fetchAllshippings } from "../services/shipping.service";

const shippingRouter = Router();

// Lấy tất cả sản phẩm
shippingRouter.get(
  "/get-shipping",
  async (req: Request, res: Response) => {
    try {
      const shippings = await fetchAllshippings(req);
      res.send(await resultSend.success(shippings.message, shippings.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default shippingRouter;
