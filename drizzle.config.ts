import { type Config } from "drizzle-kit";
import { env } from "@/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.AUTH_TOKEN,
  },
  tablesFilter: ["personal-blog_*"],
  out: "./drizzle",
} satisfies Config;
