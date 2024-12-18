import * as dotenv from 'dotenv';
dotenv.config();

export class ConfigEnvs {
  static NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  static DATABASE_URL = process.env.DATABASE_URL;
  static JWT_SECRET = process.env.JWT_SECRET;
  static NODE_ENV = process.env.NODE_ENV;
  static DATABASE_HOST = process.env.DATABASE_HOST;
  static DATABASE_USER = process.env.POSTGRES_USER;
  static DATABASE_PASSWORD = process.env.POSTGRES_PASSWORD;
  static DATABASE_NAME = process.env.POSTGRES_DB;
}

console.log("mys envs", ConfigEnvs);