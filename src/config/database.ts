import "reflect-metadata";
import { DataSource } from "typeorm";
import { ENV } from "./env";

export const ConnectDatabase = new DataSource({
  type: "mysql",
  host: ENV.DB_HOST,
  port: Number(ENV.DB_PORT) || 3306,
  username: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  entities: ["src/models/*.ts"], // Load tất cả các entity
  synchronize: true, // Tự động tạo bảng, không cần migration
  logging: true,
});
