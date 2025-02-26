import mysql from 'mysql2/promise';
import { ENV } from './env';

export async function createDatabaseIfNotExists(): Promise<void> {
  const connection = await mysql.createConnection({
    host: ENV.DB_HOST,
    port: Number(ENV.DB_PORT) || 3306,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
  });
  
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${ENV.DB_NAME}\``);
  await connection.end();
}
