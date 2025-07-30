import type { Route } from "../routes/+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router App" },
    { name: "description", content: "Learn more about our React Router application template." },
  ];
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto fade-in">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">关于我们</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            这个 React Router 应用模板旨在为现代化的前端开发提供一个强大且灵活的起点。
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">技术特性</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span><strong>React Router v7:</strong> 最新版本的路由库，支持文件基础的路由配置</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span><strong>Vite:</strong> 超快的构建工具，提供即时的热重载体验</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span><strong>TypeScript:</strong> 完整的类型支持，提高代码可维护性</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span><strong>Tailwind CSS:</strong> 实用优先的CSS框架，快速构建美观的界面</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">项目结构</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`app/
├── components/          # 可复用组件
│   ├── layout/         # 布局组件
│   └── navigation/     # 导航组件
├── pages/              # 页面组件
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── routes/             # 路由文件
├── styles/             # 样式文件
└── root.tsx            # 根组件`}
          </pre>
        </div>
      </div>
    </div>
  );
}