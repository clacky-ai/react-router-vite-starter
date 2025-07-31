import compression from "compression";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

// 加载环境变量
dotenv.config();

// Short-circuit the type-checking of the built output.
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "5173");

const app = express();

app.use(compression());
app.disable("x-powered-by");

if (DEVELOPMENT) {
  console.log("🚀 启动开发服务器");
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("🚀 启动生产服务器");
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
  );
  app.use(morgan("tiny"));
  app.use(express.static("build/client", { maxAge: "1h" }));
  
  // 在生产模式下，我们需要手动设置数据库和 React Router 处理器
  const { drizzle } = await import("drizzle-orm/postgres-js");
  const postgres = await import("postgres");
  const { createRequestHandler } = await import("@react-router/express");
  const { DatabaseContext } = await import("./database/context.js");
  const schema = await import("./database/schema.js");
  
  // 获取数据库连接字符串
  const getDatabaseUrl = () => {
    if (process.env.DATABASE_URL) {
      return process.env.DATABASE_URL;
    }
    const host = process.env.POSTGRE_SQL_INNER_HOST || "127.0.0.1";
    const port = process.env.POSTGRE_SQL_INNER_PORT || "5432";
    const user = process.env.POSTGRE_SQL_USER || "postgres";
    const password = process.env.POSTGRE_SQL_PASSWORD || "sVCDmXSf";
    const database = process.env.POSTGRE_SQL_DATABASE || "postgres";
    return `postgres://${user}:${password}@${host}:${port}/${database}`;
  };
  
  const databaseUrl = getDatabaseUrl();
  console.log("🔗 连接数据库:", databaseUrl.replace(/:[^:@]*@/, ':***@'));
  
  const client = postgres.default(databaseUrl);
  const db = drizzle(client, { schema });
  
  // 设置数据库上下文中间件
  app.use((_, __, next) => DatabaseContext.run(db, next));
  
  // 设置 React Router 处理器
  app.use(
    createRequestHandler({
      build: () => import(BUILD_PATH),
      getLoadContext() {
        return {
          isDevelopment: false,
        };
      },
    }),
  );
}

app.listen(PORT, () => {
  console.log(`🌐 服务器运行在 http://localhost:${PORT}`);
});