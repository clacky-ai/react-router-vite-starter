import type { Route } from "../routes/+types/home";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { 
  Rocket, 
  Zap, 
  Shield, 
  Palette, 
  Database, 
  Smartphone,
  ArrowRight,
  Star
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - React Router App" },
    { name: "description", content: "Welcome to our modern React Router application!" },
  ];
}

export default function HomePage() {
  const features = [
    {
      icon: Rocket,
      title: "React Router v7",
      description: "最新版本的 React Router，支持现代化的路由管理和类型安全",
      badge: "最新",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Vite 构建工具",
      description: "快速的开发服务器和优化的生产构建，提升开发体验",
      badge: "快速",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "TypeScript",
      description: "完整的类型支持，提高代码质量和开发效率",
      badge: "类型安全",
      color: "text-blue-700"
    },
    {
      icon: Palette,
      title: "shadcn/ui + Tailwind",
      description: "美观的组件库和实用优先的CSS框架，快速构建现代界面",
      badge: "组件库",
      color: "text-purple-600"
    },
    {
      icon: Database,
      title: "React Query",
      description: "强大的数据获取和状态管理库，提供缓存和同步功能",
      badge: "数据管理",
      color: "text-green-600"
    },
    {
      icon: Smartphone,
      title: "响应式设计",
      description: "完全响应式的设计，支持移动端和桌面端的完美体验",
      badge: "移动优先",
      color: "text-pink-600"
    }
  ];

  const libraries = [
    "React Router v7", "shadcn/ui", "Radix UI", "Tailwind CSS", "TypeScript",
    "React Query", "React Hook Form", "Zod", "Lucide Icons", "date-fns",
    "Recharts", "Sonner", "Vaul", "next-themes", "cmdk"
  ];

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            现代化应用模板
          </Badge>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          欢迎使用 React Router 应用模板
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          这是一个基于 React Router v7 + shadcn/ui + TypeScript 的现代化前端应用模板。
          集成了最新的前端技术栈和最佳实践，帮助您快速启动项目。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/about">
              了解更多 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">联系我们</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">核心特性</h2>
          <p className="text-lg text-muted-foreground">
            集成了现代前端开发所需的所有工具和库
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Integrated Libraries */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">集成的库和工具</h2>
          <p className="text-lg text-muted-foreground">
            预装了 15+ 个精选的前端库，开箱即用
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {libraries.map((lib, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {lib}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">开始构建您的应用</CardTitle>
            <CardDescription>
              立即开始使用这个强大的模板，快速构建现代化的 React 应用
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  查看源码
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">阅读文档</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}