# React Router 现代化应用模板

一个基于 React Router v7、Vite、TypeScript 和 Tailwind CSS 的现代化前端应用模板。

## 🚀 技术栈

- **React Router v7** - 最新版本的路由库，支持现代化的路由管理和类型安全
- **Vite** - 快速的开发服务器和优化的生产构建
- **TypeScript** - 完整的类型支持，提高代码质量和开发效率  
- **Tailwind CSS v4** - 实用优先的CSS框架，快速构建美观界面

## ✨ 功能特性

- ✅ **现代化路由配置** - 基于 React Router v7 的文件为基础的路由系统
- ✅ **类型安全** - 完整的 TypeScript 支持，包括路由类型生成
- ✅ **响应式设计** - 移动端和桌面端自适应布局
- ✅ **组件化架构** - 清晰的项目结构和可复用组件
- ✅ **活跃链接状态** - 智能导航高亮显示
- ✅ **404 错误处理** - 优雅的页面未找到处理
- ✅ **动画效果** - 流畅的页面过渡动画
- ✅ **SEO 优化** - 每个页面的 meta 标签配置

## 📁 项目结构

\`\`\`
app/
├── components/          # 可复用组件
│   ├── layout/         # 布局组件 (Header, Footer, MainLayout)
│   └── navigation/     # 导航组件 (Navigation, MobileNavigation)
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 首页
│   ├── AboutPage.tsx   # 关于页面
│   ├── ContactPage.tsx # 联系页面
│   └── NotFoundPage.tsx# 404页面
├── routes/             # 路由文件
│   ├── home.tsx        # 首页路由
│   ├── about.tsx       # 关于路由
│   ├── contact.tsx     # 联系路由
│   └── not-found.tsx   # 404路由
├── app.css             # 全局样式
├── root.tsx            # 根组件
└── routes.ts           # 路由配置
\`\`\`

## 🛠️ 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0

### 安装

\`\`\`bash
# 克隆项目（或下载源码）
git clone <repository-url>
cd react-router-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

### 可用脚本

\`\`\`bash
# 开发服务器
npm run dev

# 类型检查
npm run typecheck

# 构建生产版本
npm run build

# 启动生产服务器
npm start
\`\`\`

## 🎯 使用指南

### 添加新页面

1. **创建页面组件** - 在 \`app/pages/\` 目录下创建新的页面组件：

\`\`\`typescript
// app/pages/NewPage.tsx
import type { Route } from "../routes/+types/new-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Page - React Router App" },
    { name: "description", content: "Description for the new page." },
  ];
}

export default function NewPage() {
  return (
    <div className="max-w-4xl mx-auto fade-in">
      <h1>新页面</h1>
      <p>页面内容...</p>
    </div>
  );
}
\`\`\`

2. **创建路由文件** - 在 \`app/routes/\` 目录下创建对应的路由文件：

\`\`\`typescript
// app/routes/new-page.tsx
import NewPage, { meta } from "../pages/NewPage";

export { meta };
export default NewPage;
\`\`\`

3. **更新路由配置** - 在 \`app/routes.ts\` 中添加新路由：

\`\`\`typescript
// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("new-page", "routes/new-page.tsx"), // 新增路由
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
\`\`\`

4. **更新导航** - 在导航组件中添加新链接：

\`\`\`typescript
// app/components/navigation/Navigation.tsx
const navigationItems = [
  { to: "/", label: "首页", exact: true },
  { to: "/about", label: "关于" },
  { to: "/contact", label: "联系" },
  { to: "/new-page", label: "新页面" }, // 新增导航
];
\`\`\`

### 自定义样式

项目使用 Tailwind CSS v4，您可以：

1. **使用 Tailwind 类** - 直接在组件中使用 Tailwind 的实用类
2. **自定义主题** - 在 \`app/app.css\` 中的 \`@theme\` 块中定义自定义样式
3. **添加全局样式** - 在 \`app/app.css\` 中添加自定义 CSS

### 布局定制

- **修改头部** - 编辑 \`app/components/layout/Header.tsx\`
- **修改底部** - 编辑 \`app/components/layout/Footer.tsx\`
- **修改整体布局** - 编辑 \`app/components/layout/MainLayout.tsx\`

## 🔧 配置

### TypeScript 配置

项目使用严格的 TypeScript 配置，配置文件位于 \`tsconfig.json\`。

### Vite 配置

Vite 配置位于 \`vite.config.ts\`，已配置 TypeScript 路径映射和最优化设置。

### React Router 配置

React Router 配置位于 \`react-router.config.ts\`，支持 SSR 和静态生成。

## 📱 响应式设计

模板包含完整的响应式设计：

- **移动端优先** - 使用 Tailwind 的移动端优先方法
- **断点** - sm,md,lg,xl 等标准断点
- **移动导航** - 汉堡菜单和滑出面板
- **触摸友好** - 适合移动设备的交互元素

## 🎨 样式系统

### 预定义样式类

- \`.fade-in\` - 淡入动画
- \`.slide-down\` - 下滑动画
- \`.card\` - 卡片样式
- \`.btn\`, \`.btn-primary\`, \`.btn-secondary\` - 按钮样式
- \`.form-input\`, \`.form-textarea\` - 表单元素样式

### 颜色方案

- **主色调**: Blue (蓝色)
- **中性色**: Gray (灰色)
- **成功色**: Green (绿色)
- **警告色**: Purple (紫色)

## 🚀 部署

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

构建文件将生成在 \`build/\` 目录中。

### 部署选项

- **Vercel** - 推荐，支持零配置部署
- **Netlify** - 静态站点托管
- **Railway** - 全栈应用部署
- **自托管** - 使用任何支持 Node.js 的服务器

## 📚 学习资源

- [React Router v7 文档](https://reactrouter.com/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS v4 文档](https://tailwindcss.com/)
- [TypeScript 文档](https://www.typescriptlang.org/)

## 🤝 贡献

欢迎贡献代码！请：

1. Fork 这个仓库
2. 创建你的特性分支 (\`git checkout -b feature/amazing-feature\`)
3. 提交你的修改 (\`git commit -m 'Add some amazing feature'\`)
4. 推送到分支 (\`git push origin feature/amazing-feature\`)
5. 开启一个 Pull Request

## 📄 许可证

此项目使用 MIT 许可证 - 查看 LICENSE 文件了解详情。

## 🔗 相关链接

- [React Router](https://reactrouter.com/) - 路由库
- [Vite](https://vitejs.dev/) - 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型系统

---

**享受编码! 🎉**