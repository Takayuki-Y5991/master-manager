import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

export const client = drizzle(process.env.DATABASE_URL!);
