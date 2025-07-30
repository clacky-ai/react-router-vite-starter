# React Router 现代化应用模板

一个基于 React Router v7、shadcn/ui、TypeScript 和 Tailwind CSS 的现代化前端应用模板，集成了 15+ 个精选的前端库。

## 🚀 核心技术栈

- **React Router v7** - 最新版本的路由库，支持现代化的路由管理和类型安全
- **shadcn/ui** - 美观、可访问的 React 组件库
- **Radix UI** - 底层无样式 UI 基础组件
- **Vite** - 快速的开发服务器和优化的生产构建
- **TypeScript** - 完整的类型支持，提高代码质量和开发效率  
- **Tailwind CSS v3** - 实用优先的CSS框架，快速构建美观界面
- **React Query** - 强大的数据获取和状态管理库
- **PostgreSQL + Drizzle ORM** - 完整的数据库集成方案
- **React Hook Form** - 高性能表单库
- **Zod** - TypeScript 优先的模式验证库
- **Lucide Icons** - 美观的图标库

## ✨ 功能特性

- ✅ **现代化路由配置** - 基于 React Router v7 的文件为基础的路由系统
- ✅ **shadcn/ui 组件库** - 预构建的美观、可访问的组件
- ✅ **类型安全** - 完整的 TypeScript 支持，包括路由类型生成
- ✅ **响应式设计** - 移动端和桌面端自适应布局
- ✅ **组件化架构** - 清晰的项目结构和可复用组件
- ✅ **表单处理** - React Hook Form + Zod 验证集成
- ✅ **服务器端渲染** - 基于 React Router v7 Loaders 的 SSR
- ✅ **活跃链接状态** - 智能导航高亮显示
- ✅ **404 错误处理** - 优雅的页面未找到处理
- ✅ **动画效果** - 流畅的页面过渡动画和组件动画
- ✅ **SEO 优化** - 每个页面的 meta 标签配置
- ✅ **数据库集成** - PostgreSQL + Drizzle ORM + SSR Loaders
- ✅ **图标系统** - Lucide Icons 集成
- ✅ **Express 服务器** - 生产就绪的 Node.js 服务器
- ✅ **主题系统** - 支持亮色/暗色主题切换

## 📁 项目结构

```
app/
├── components/          # 可复用组件
│   ├── ui/             # shadcn/ui 基础组件
│   │   ├── button.tsx  # 按钮组件
│   │   ├── card.tsx    # 卡片组件
│   │   ├── input.tsx   # 输入框组件
│   │   ├── textarea.tsx# 文本域组件
│   │   └── badge.tsx   # 徽章组件
│   ├── layout/         # 布局组件
│   │   ├── Header.tsx  # 页头组件
│   │   ├── Footer.tsx  # 页脚组件
│   │   └── MainLayout.tsx # 主布局
│   └── navigation/     # 导航组件
│       ├── Navigation.tsx # 桌面端导航
│       └── MobileNavigation.tsx # 移动端导航
├── lib/                # 工具函数
│   └── utils.ts        # shadcn/ui 工具函数
database/               # 数据库相关文件 (新架构)
├── context.ts          # 数据库上下文管理
├── schema.ts           # 数据库模型定义
└── seed.ts             # 种子数据
server/                 # 服务器端代码
├── app.ts              # Express 应用配置
drizzle/                # Drizzle 迁移文件
└── [迁移文件]          # 自动生成的迁移
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 首页 (展示所有特性)
│   ├── AboutPage.tsx   # 关于页面
│   ├── PostsPage.tsx   # 文章列表 (数据库示例)
│   ├── ContactPage.tsx # 联系页面 (表单示例)
│   └── NotFoundPage.tsx# 404页面
├── routes/             # 路由文件 (支持 SSR loaders)
├── app.css             # 全局样式和主题变量
├── root.tsx            # 根组件
└── routes.ts           # 路由配置
server.js               # 服务器启动文件
drizzle.config.ts       # Drizzle ORM 配置
.env.example            # 环境变量示例
```

## 🛠️ 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0

### 安装

```bash
# 克隆项目（或下载源码）
git clone <repository-url>
cd react-router-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 可用脚本

```bash
# 开发服务器 (Express + SSR)
npm run dev

# 类型检查
npm run typecheck

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 数据库操作 (使用 postgres-js + Drizzle ORM)
npm run db:generate  # 生成数据库迁移文件
npm run db:migrate   # 运行数据库迁移
npm run db:seed      # 填充种子数据
npm run db:setup     # 一键设置数据库
npm run db:studio    # 启动 Drizzle Studio
```

## 🎯 使用指南

### PostgreSQL 数据库集成

项目采用了 React Router v7 官方推荐的数据库集成模式：

#### 数据库连接

```typescript
// database/context.ts - 使用 AsyncLocalStorage 管理数据库连接
import { AsyncLocalStorage } from "node:async_hooks";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export const DatabaseContext = new AsyncLocalStorage<PostgresJsDatabase<typeof schema>>();

export function database() {
  const db = DatabaseContext.getStore();
  if (!db) {
    throw new Error("DatabaseContext not set");
  }
  return db;
}
```

#### 在路由中使用数据库

```typescript
// app/routes/posts.tsx - 使用 loader 函数进行 SSR 数据获取
import type { Route } from "./+types/posts";
import { database } from "../../database/context.js";
import { posts, users } from "../../database/schema.js";
import { eq, desc } from "drizzle-orm";

export async function loader({ context }: Route.LoaderArgs) {
  const db = database();
  
  // 服务器端数据获取
  const allPosts = await db
    .select()
    .from(posts)
    .innerJoin(users, eq(posts.authorId, users.id))
    .where(eq(posts.published, true))
    .orderBy(desc(posts.createdAt));
    
  return { posts: allPosts };
}

export default function PostsPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

#### 数据库迁移和种子数据

```bash
# 生成新的迁移文件
npm run db:generate

# 运行数据库迁移
npm run db:migrate

# 填充种子数据
npm run db:seed

# 一键设置 (生成 + 迁移 + 种子)
npm run db:setup
```

### 使用 shadcn/ui 组件

项目已预装了常用的 shadcn/ui 组件，可以直接使用：

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>示例卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="输入内容" />
          <div className="flex gap-2">
            <Button>主要按钮</Button>
            <Button variant="outline">次要按钮</Button>
            <Badge>标签</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 集成的库和工具

项目预装了 15+ 个精选的前端库：

#### UI 组件库
- **shadcn/ui** - 高质量的 React 组件库
- **Radix UI** - 无样式的可访问 UI 基础组件
- **Lucide Icons** - 美观的 SVG 图标集

#### 开发工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **tailwindcss-animate** - Tailwind 动画插件
- **class-variance-authority** - 组件变体管理
- **clsx & tailwind-merge** - 样式类名合并工具

#### 状态和表单管理
- **React Query** (@tanstack/react-query) - 数据获取和状态管理
- **React Hook Form** - 高性能表单库
- **Zod** - TypeScript 优先的模式验证

#### 实用工具
- **date-fns** - 现代化的日期工具库
- **next-themes** - 主题切换支持
- **sonner** - 优雅的通知组件
- **cmdk** - 命令面板组件

#### UI 增强
- **vaul** - 移动端抽屉组件
- **embla-carousel-react** - 轮播图组件
- **react-resizable-panels** - 可调整大小的面板
- **recharts** - 数据可视化图表库

### 添加新页面

1. **创建页面组件** - 使用 shadcn/ui 组件构建页面：

```typescript
// app/pages/NewPage.tsx
import type { Route } from "../routes/+types/new-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Page - React Router App" },
    { name: "description", content: "Description for the new page." },
  ];
}

export default function NewPage() {
  return (
    <div className="max-w-4xl mx-auto fade-in">
      <Card>
        <CardHeader>
          <CardTitle>新页面</CardTitle>
        </CardHeader>
        <CardContent>
          <p>使用 shadcn/ui 组件构建的页面内容。</p>
          <Button>示例按钮</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

2. **创建路由文件** - 在 `app/routes/` 目录下创建对应的路由文件：

```typescript
// app/routes/new-page.tsx
import NewPage, { meta } from "../pages/NewPage";

export { meta };
export default NewPage;
```

3. **更新路由配置** - 在 `app/routes.ts` 中添加新路由：

```typescript
// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("new-page", "routes/new-page.tsx"), // 新增路由
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
```

4. **更新导航** - 在导航组件中添加新链接：

```typescript
// app/components/navigation/Navigation.tsx
const navigationItems = [
  { to: "/", label: "首页", exact: true },
  { to: "/about", label: "关于" },
  { to: "/contact", label: "联系" },
  { to: "/new-page", label: "新页面" }, // 新增导航
];
```

### 自定义样式

项目使用 Tailwind CSS v3，您可以：

1. **使用 Tailwind 类** - 直接在组件中使用 Tailwind 的实用类
2. **自定义主题** - 在 `app/app.css` 中的 `@layer base` 块中定义自定义样式
3. **使用 shadcn/ui 主题变量** - 项目已配置 CSS 变量用于主题切换
4. **添加全局样式** - 在 `app/app.css` 中添加自定义 CSS

### 表单处理

使用 React Hook Form + Zod 进行表单验证：

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符"),
  email: z.string().email("请输入有效邮箱"),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input {...form.register("name")} placeholder="姓名" />
      <Input {...form.register("email")} type="email" placeholder="邮箱" />
      <Button type="submit">提交</Button>
    </form>
  );
}
```

### 布局定制

- **修改头部** - 编辑 `app/components/layout/Header.tsx`
- **修改底部** - 编辑 `app/components/layout/Footer.tsx`
- **修改整体布局** - 编辑 `app/components/layout/MainLayout.tsx`

## 🔧 配置

### TypeScript 配置

项目使用严格的 TypeScript 配置，配置文件位于 `tsconfig.json`。已配置路径别名 `@/*` 指向 `app/*`。

### Vite 配置

Vite 配置位于 `vite.config.ts`，已配置：
- TypeScript 路径映射
- 外部主机访问支持
- 路径别名解析

### React Router 配置

React Router 配置位于 `react-router.config.ts`，支持 SSR 和静态生成。

### Tailwind CSS 配置

Tailwind CSS v3 配置位于 `tailwind.config.ts`，已配置：
- shadcn/ui 颜色系统
- 动画支持
- 响应式断点

## 📱 响应式设计

模板包含完整的响应式设计：

- **移动端优先** - 使用 Tailwind 的移动端优先方法
- **断点** - sm,md,lg,xl 等标准断点
- **移动导航** - 汉堡菜单和滑出面板
- **触摸友好** - 适合移动设备的交互元素

## 🎨 样式系统

### 主题变量

项目使用 CSS 变量系统，支持亮色/暗色主题：

```css
/* 在 app.css 中定义 */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... 更多变量 */
  }
  
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    /* ... 暗色模式变量 */
  }
}
```

### 预定义组件

- **按钮变体**: default, destructive, outline, secondary, ghost, link
- **卡片系统**: Card, CardHeader, CardContent, CardFooter
- **表单组件**: Input, Textarea, Label
- **反馈组件**: Badge, Toast, Dialog

### 颜色方案

- **主色调**: Blue (蓝色)
- **中性色**: Gray (灰色) 
- **语义色**: Success (绿色), Warning (黄色), Destructive (红色)
- **主题适配**: 支持亮色/暗色模式

## 🚀 部署

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `build/` 目录中。

### 部署选项

- **Vercel** - 推荐，支持零配置部署
- **Netlify** - 静态站点托管
- **Railway** - 全栈应用部署
- **自托管** - 使用任何支持 Node.js 的服务器

## 📚 学习资源

- [React Router v7 文档](https://reactrouter.com/)
- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS v3 文档](https://tailwindcss.com/)
- [React Query 文档](https://tanstack.com/query)
- [TypeScript 文档](https://www.typescriptlang.org/)

## 🤝 贡献

欢迎贡献代码！请：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的修改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 📄 许可证

此项目使用 MIT 许可证 - 查看 LICENSE 文件了解详情。

## 🔗 相关链接

- [React Router](https://reactrouter.com/) - 路由库
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Vite](https://vitejs.dev/) - 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型系统
- [React Query](https://tanstack.com/query) - 数据获取库

---

**享受编码! 🎉**

*这个模板为现代化的 React 应用开发提供了一个强大且灵活的起点，包含了最佳实践和完整的开发工具链。*