import { Request, Response, NextFunction, Router } from "express";
import { fetchAllProducts, fetchDeleteProduct, fetchSaveProduct } from "../services/product.service";
import resultSend from "../config/result";
import { fetchActiveValidate, fetchAllValidate, fetchSaveValidate } from "../validate/product.validate";
import { ConfigService } from "../config/ConfigService";
import { decryption, encryption } from "../helper/encryption.helper";
import { authMiddleware } from "../middleware/auth.middleware";
import { decryptBodyMiddle } from "../middleware/common.middleware";

const productRouter = Router();

// Lấy tất cả sản phẩm
productRouter.get(
  "/get-product",
  fetchAllValidate,
  // authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const products = await fetchAllProducts(req);
      res.send(await resultSend.success(products.message, products.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

productRouter.post(
  "/save-product",
  fetchSaveValidate,
  // authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const products = await fetchSaveProduct(req)
      res.send(await resultSend.success(products.message, products.data));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

productRouter.put(
  "/active-product",
  // decryptBodyMiddle,
  fetchActiveValidate,
  // authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const products = await fetchDeleteProduct(req);
      res.send(await resultSend.success(products.message));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

productRouter.get(
  "/test",
  // fetchAllProductValidate,
  async (req: Request, res: Response) => {
    try {
      // const configService = await ConfigService.getInstance();
      // const apiKey = configService.getConfig("COSTS_AFF_TIKTOK");
      // console.log(apiKey)

      const { cipherText, nonce } = await encryption({
        "id": "6a7bfa3e-87c5-4a82-80c7-2ba62ce0eb49"
      });
      console.log(cipherText, nonce);
      // const decry = await decryption(cipherText, nonce);
      // console.log(decry, "decrydecrydecry")
      res.send(await resultSend.success("Thành công", {
        "id": "6a7bfa3e-87c5-4a82-80c7-2ba62ce0eb49"
      }));
    } catch (error) {
      console.log(error);
      res.send(await resultSend.severErrors("Máy chủ đang bận!!!"));
    }
  }
);

export default productRouter;
