import dotenv from "dotenv";

// Load biến môi trường từ file .env
dotenv.config();

// Xuất các biến ra để sử dụng toàn cục
export const ENV = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY || "default_secret",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_PORT: process.env.DB_PORT || "",
    DB_NAME: process.env.DB_NAME || "",
    SECRET_KEY_ENCRYPTION: process.env.SECRET_KEY_ENCRYPTION || "",
};
