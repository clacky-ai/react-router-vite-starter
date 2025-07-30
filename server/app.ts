import { createRequestHandler } from "@react-router/express";
import { drizzle } from "drizzle-orm/postgres-js";
import express from "express";
import postgres from "postgres";
import "react-router";

import { DatabaseContext } from "../database/context.js";
import * as schema from "../database/schema.js";

declare module "react-router" {
  interface AppLoadContext {
    isDevelopment: boolean;
  }
}

export const app = express();

// 获取数据库连接字符串
const getDatabaseUrl = () => {
  // 优先使用环境变量
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  
  // 使用 Clacky 中间件提供的信息
  const host = process.env.POSTGRE_SQL_INNER_HOST || "127.0.0.1";
  const port = process.env.POSTGRE_SQL_INNER_PORT || "5432";
  const user = process.env.POSTGRE_SQL_USER || "postgres";
  const password = process.env.POSTGRE_SQL_PASSWORD || "sVCDmXSf";
  const database = process.env.POSTGRE_SQL_DATABASE || "postgres";
  
  return `postgres://${user}:${password}@${host}:${port}/${database}`;
};

const databaseUrl = getDatabaseUrl();
console.log("🔗 连接数据库:", databaseUrl.replace(/:[^:@]*@/, ':***@'));

const client = postgres(databaseUrl);
const db = drizzle(client, { schema });

// 使用 AsyncLocalStorage 设置数据库上下文
app.use((_, __, next) => DatabaseContext.run(db, next));

app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        isDevelopment: process.env.NODE_ENV === "development",
      };
    },
  }),
);