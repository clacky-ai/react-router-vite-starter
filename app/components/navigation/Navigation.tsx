import { NavLink } from "react-router";

const navigationItems = [
  { to: "/", label: "首页", exact: true },
  { to: "/about", label: "关于" },
  { to: "/posts", label: "文章" },
  { to: "/contact", label: "联系" },
];

export default function Navigation() {
  return (
    <nav className="space-x-8">
      {navigationItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}