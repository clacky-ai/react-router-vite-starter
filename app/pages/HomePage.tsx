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
      title: "PostgreSQL + React Query",
      description: "集成 PostgreSQL 数据库和 React Query，实现完整的数据管理方案",
      badge: "数据库集成",
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
            <Link to="/posts">
              查看文章示例 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">
              了解更多
            </Link>
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

      {/* Database Integration Showcase */}
      <div className="mt-16 py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Database className="w-4 h-4 mr-2" />
            数据库集成示例
          </Badge>
          <h2 className="text-3xl font-bold mb-4">PostgreSQL 数据库集成</h2>
          <p className="text-lg text-muted-foreground mb-8">
            本模板展示了完整的 PostgreSQL 数据库集成方案，使用 Drizzle ORM 和 React Query
          </p>
          <div className="flex justify-center">
            <Button asChild className="mb-8">
              <Link to="/posts">
                体验实时数据 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Drizzle ORM</h3>
              <p className="text-sm text-muted-foreground">
                类型安全的 ORM，完整的 TypeScript 支持
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">React Query</h3>
              <p className="text-sm text-muted-foreground">
                强大的数据获取、缓存和同步功能
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">数据验证</h3>
              <p className="text-sm text-muted-foreground">
                使用 Zod 进行数据模型验证和类型推断
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">种子数据</h3>
              <p className="text-sm text-muted-foreground">
                预置的测试数据和数据库迁移
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}