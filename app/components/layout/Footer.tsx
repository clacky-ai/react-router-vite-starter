import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              React Router App
            </Link>
            <p className="mt-2 text-gray-600">
              基于 React Router v7 + Vite + TypeScript 的现代化前端应用模板。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              快速链接
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  关于
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              技术栈
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>React Router v7</li>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} React Router App. 保留所有权利。
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              使用 React Router 和 Vite 构建
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}