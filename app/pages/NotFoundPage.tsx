import { Link } from "react-router";
import type { Route } from "../routes/+types/not-found";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Not Found - React Router App" },
    { name: "description", content: "The page you are looking for could not be found." },
  ];
}

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto fade-in">
      <div className="text-center py-24">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">页面未找到</h2>
          <p className="text-xl text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            返回首页
          </Link>
          
          <div className="pt-8">
            <p className="text-gray-500 mb-4">您也可以尝试以下链接：</p>
            <nav className="flex justify-center space-x-6">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                首页
              </Link>
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                关于
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                联系
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 p-8 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">遇到问题？</h3>
            <p className="text-gray-600">
              如果您认为这是一个错误，请
              <Link to="/contact" className="text-blue-600 hover:underline ml-1">
                联系我们
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}