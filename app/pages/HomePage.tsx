import type { Route } from "../routes/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - React Router App" },
    { name: "description", content: "Welcome to our modern React Router application!" },
  ];
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto fade-in">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          欢迎使用 React Router 应用模板
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          这是一个基于 React Router v7 + Vite + TypeScript + Tailwind CSS 的现代化前端应用模板
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">React Router v7</h3>
            <p className="text-gray-600">
              最新版本的 React Router，支持现代化的路由管理和类型安全
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-green-600">Vite 构建工具</h3>
            <p className="text-gray-600">
              快速的开发服务器和优化的生产构建，提升开发体验
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-purple-600">TypeScript</h3>
            <p className="text-gray-600">
              完整的类型支持，提高代码质量和开发效率
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}