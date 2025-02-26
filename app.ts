import express, { Application, Request } from 'express';
import dotenv from 'dotenv';
import productRouter from './src/controllers/product.controller';
import cors from "cors";
import unitRouter from './src/controllers/unit.controller';
import platformRouter from './src/controllers/platform.controller';
import shippingRouter from './src/controllers/shipping.controller';
import configRouter from './src/controllers/config.controller';
import authRouter from './src/controllers/auth.controller';
import { ConnectDatabase } from './src/config/database';
import { ENV } from './src/config/env';
import { rateLimit } from 'express-rate-limit'
import { ConfigService } from './src/config/ConfigService';
import { createDatabaseIfNotExists } from './src/config/createDatabaseIfNotExists';
import { Config } from './src/models/config.model';
import { Unit } from './src/models/unit.model';
import { Platform } from './src/models/platform.model';
import { Shipping } from './src/models/shipping.model';

const app: Application = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
})

// app.use(limiter)
app.use(cors())

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text())

// Routes (sử dụng controller sản phẩm nếu cần)
app.use("/api/v1/product", productRouter);
app.use("/api/v1/unit", unitRouter);
app.use("/api/v1/platform", platformRouter);
app.use("/api/v1/shipping", shippingRouter);
app.use("/api/v1/config", configRouter);
app.use("/api/v1/auth", authRouter);

// Khởi động server và tự động tạo bảng
app.listen(ENV.PORT, async () => {
  try {
    // Tạo database nếu chưa có
    await createDatabaseIfNotExists();
    console.log("Database ensured to exist.");

    // Kết nối database
    await ConnectDatabase.initialize()

    // tạo dữ liệu mẫu
    const activeCreateValueDefault = true;
    if (activeCreateValueDefault) {
      // Config đây là bảng setup sever
      const configRepo = ConnectDatabase.getRepository(Config);
      const count = await configRepo.count();
      if (count === 0) {
        await configRepo.save([
          {
            id: "088bb879-7f02-4021-9fcb-155e92afed25",
            name_config: "Phí quảng cáo SHOPPE",
            key_config: "COST_ADS_SHOPPE",
            value_config: "0",
          },
          {
            id: "1382e5ca-bcbc-42db-84b3-91f381e841be",
            name_config: "Phí tiếp thị tiktok",
            key_config: "COSTS_AFF_TIKTOK",
            value_config: "0",
          },
          {
            id: "325e21b3-0df4-45d4-a403-2aaf0b9551cc",
            name_config: "Phí sàn tiktok",
            key_config: "COSTS_PLATFORM_TIKTOK",
            value_config: "300",
          },
          {
            id: "3667514c-986c-46bd-a449-2a6fa46df7ad",
            name_config: "Phí thanh toán sàn tiktok",
            key_config: "COSTS_PAYMENT_TIKTOK",
            value_config: "500",
          },
          {
            id: "39a595cd-7f84-4e19-a34f-173dfa5f5069",
            name_config: "Phí tiếp thị shoppe",
            key_config: "COSTS_AFF_SHOPPE",
            value_config: "0",
          },
          {
            id: "7aeca861-27c4-46f0-b8c1-578240b25c96",
            name_config: "Phí vận hành shoppe",
            key_config: "COST_OPERATING_SHOPPE",
            value_config: "200",
          },
          {
            id: "8cde9353-e782-41cc-9059-71ee787dd833",
            name_config: "Phí sàn shoppe",
            key_config: "COSTS_PLATFORM_SHOPPE",
            value_config: "400",
          },
          {
            id: "9c217da7-964f-46a3-ac26-7d9d2201c186",
            name_config: "Phí vận hành sàn tiktok",
            key_config: "COST_OPERATING_TIKTOK",
            value_config: "200",
          },
          {
            id: "a0a05ef2-1873-4c0d-bffa-4a9b54afbbe2",
            name_config: "Phí thanh toán sàn shoppe",
            key_config: "COSTS_PAYMENT_SHOPPE",
            value_config: "500",
          },
          {
            id: "aae5126c-8895-4553-957c-0409e56d4f0b",
            name_config: "Phí quảng cáo tiktok",
            key_config: "COST_ADS_TIKTOK",
            value_config: "0",
          },
          {
            id: "d1584a14-dbe4-407c-b398-7dfa64d25c20",
            name_config: "Phí đóng gói",
            key_config: "COSTS_BOX",
            value_config: "200",
          },
          {
            id: "dfcc8812-ebd7-4fca-ae92-b902f92d5ecb",
            name_config: "Thuế",
            key_config: "COSTS_TAX",
            value_config: "150",
          },
        ]);
      }

      // Unit đây là bảng đơn vị
      const unitRepo = ConnectDatabase.getRepository(Unit);
      const countUnit = await unitRepo.count();
      if (countUnit === 0) {
        await unitRepo.save([
          {
            id: "06ba0d0e-4843-447b-912d-8ac11f76f798",
            name_unit: "Cái",
            active: true
          },
          {
            id: "8117ac81-a76b-4aa2-90b1-92c63101a179",
            name_unit: "Bộ",
            active: true
          },
          {
            id: "d18afcdf-9e2b-4754-8b6c-63df92562a10",
            name_unit: "Đôi",
            active: true
          }
        ]);
      }

      // Platform đây là bảng Nền tảng mà sản phẩm được niêm yết
      const platformRepo = ConnectDatabase.getRepository(Platform);
      const countplatform = await platformRepo.count();
      if (countplatform === 0) {
        await platformRepo.save([
          {
            id: "d3ec8496-0e31-43be-979a-b6fab08a11fb",
            name_platform: "Shoppe",
            active: true
          },
          {
            id: "de5e9b28-4e87-4b8a-91d4-ae1d19199667",
            name_platform: "Tiktok Shop",
            active: true
          }
        ]);
      }

      // Platform đây là bảng Nền tảng mà sản phẩm được niêm yết
      const shippingRepo = ConnectDatabase.getRepository(Shipping);
      const countshipping = await shippingRepo.count();
      if (countshipping === 0) {
        await shippingRepo.save([
          {
            id: "2e3cca64-be90-4166-a9ec-7a98e6a280da",
            name_shipping: "Voucher Extra",
            active: true,
            persent: 300,
            key: "shoppe"
          },
          {
            id: "326e51ba-cbe6-4f9f-8efd-c54c8201d1e6",
            name_shipping: "Myship",
            active: true,
            persent: 0,
            key: "common"
          },
          {
            id: "4e00387f-9e77-41e5-9cc2-6be36049ef39",
            name_shipping: "Freeship Extra",
            active: true,
            persent: 600,
            key: "shoppe"
          },
        ]);
      }
    }

    const configService = await ConfigService.getInstance();
    console.log("Config loaded on startup:", configService);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Thoát nếu không thể kết nối
  }
});
