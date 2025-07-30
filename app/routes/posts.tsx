import type { Route } from "./+types/posts";
import { database } from "../../database/context.js";
import { posts, users, categories, postCategories } from "../../database/schema.js";
import { eq, desc } from "drizzle-orm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { 
  Calendar, 
  User, 
  Eye, 
  MessageSquare,
  ArrowRight,
  BookOpen,
  Clock
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "文章列表 - React Router App" },
    { name: "description", content: "浏览我们的技术文章和教程" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const db = database();

  // 获取所有已发布的文章，包含作者信息
  const postsWithAuthors = await db
    .select({
      id: posts.id,
      title: posts.title,
      content: posts.content,
      excerpt: posts.excerpt,
      published: posts.published,
      viewCount: posts.viewCount,
      createdAt: posts.createdAt,
      updatedAt: posts.updatedAt,
      author: {
        id: users.id,
        name: users.name,
        avatar: users.avatar,
      },
    })
    .from(posts)
    .innerJoin(users, eq(posts.authorId, users.id))
    .where(eq(posts.published, true))
    .orderBy(desc(posts.createdAt));

  // 获取所有分类
  const allCategories = await db.select().from(categories);

  // 为每篇文章获取分类信息
  const postsWithCategories = await Promise.all(
    postsWithAuthors.map(async (post) => {
      const postCats = await db
        .select({
          id: categories.id,
          name: categories.name,
          slug: categories.slug,
        })
        .from(postCategories)
        .innerJoin(categories, eq(postCategories.categoryId, categories.id))
        .where(eq(postCategories.postId, post.id));

      return {
        ...post,
        categories: postCats,
      };
    })
  );

  return {
    posts: postsWithCategories,
    categories: allCategories,
    isDevelopment: context.isDevelopment,
  };
}

function PostCard({ post }: { post: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-wrap gap-2">
            {post.categories?.map((category: any) => (
              <Badge key={category.id} variant="secondary" className="text-xs">
                {category.name}
              </Badge>
            ))}
          </div>
          <Badge variant="default">已发布</Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {post.excerpt || post.content.slice(0, 150) + "..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author?.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDistanceToNow(new Date(post.createdAt), { 
                  addSuffix: true, 
                  locale: zhCN 
                })}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{post.viewCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span>0</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/posts/${post.id}`}>
              阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PostsPage({ loaderData }: Route.ComponentProps) {
  const { posts, categories, isDevelopment } = loaderData;

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* Header */}
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            技术博客
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          文章列表
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          这里展示的是从 PostgreSQL 数据库中获取的真实文章数据，
          使用 React Router v7 的 loader 模式进行服务器端渲染。
        </p>
      </div>

      {/* Categories */}
      {categories && categories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">分类</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category.id} variant="outline" className="text-sm">
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="py-8">
        {posts && posts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                全部文章 ({posts.length})
              </h2>
              <p className="text-sm text-muted-foreground">
                数据来源: PostgreSQL + Drizzle ORM (SSR)
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">暂无文章</h3>
            <p className="text-muted-foreground mb-4">
              数据库中还没有已发布的文章数据
            </p>
            <Button asChild>
              <Link to="/">返回首页</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Database Info */}
      <div className="mt-16 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-2">数据库集成示例 - SSR 模式</h3>
        <p className="text-muted-foreground mb-4">
          这个页面展示了真正的 React Router v7 + PostgreSQL 集成：
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• 使用 loader 函数进行服务器端数据获取</li>
          <li>• 通过 AsyncLocalStorage 管理数据库连接</li>
          <li>• 使用 Drizzle ORM 进行类型安全的查询</li>
          <li>• 支持服务器端渲染 (SSR) 和客户端导航</li>
          <li>• 数据在服务器端预加载，提供更好的性能</li>
        </ul>
        {isDevelopment && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              🛠️ <strong>开发模式</strong>：当前运行在开发环境中，数据来自真实的 PostgreSQL 数据库。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}