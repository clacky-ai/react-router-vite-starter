import { defineConfig } from "drizzle-kit";

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  
  const host = process.env.POSTGRE_SQL_INNER_HOST || "127.0.0.1";
  const port = process.env.POSTGRE_SQL_INNER_PORT || "5432";
  const user = process.env.POSTGRE_SQL_USER || "postgres";
  const password = process.env.POSTGRE_SQL_PASSWORD || "sVCDmXSf";
  const database = process.env.POSTGRE_SQL_DATABASE || "postgres";
  
  return `postgres://${user}:${password}@${host}:${port}/${database}`;
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: getDatabaseUrl(),
  },
});