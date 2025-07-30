import type { Route } from "../routes/+types/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, MessageSquare, Send } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - React Router App" },
    { name: "description", content: "Get in touch with us through our contact form." },
  ];
}

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感谢您的留言！这只是一个演示表单。");
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "邮箱联系",
      description: "通过邮箱与我们联系",
      value: "contact@example.com",
      action: "mailto:contact@example.com"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "查看源代码或提交 Issue",
      value: "GitHub 仓库",
      action: "https://github.com"
    },
    {
      icon: MessageSquare,
      title: "在线讨论",
      description: "加入开发者社区",
      value: "讨论区",
      action: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto fade-in">
      <div className="py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            联系我们
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            有问题、建议或合作意向？我们很乐意听取您的声音。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                发送消息
              </CardTitle>
              <CardDescription>
                填写下面的表单，我们会尽快回复您。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      姓名
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      邮箱
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    主题
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="请简要描述您的问题或建议"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    消息内容
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="请详细描述您的问题或建议..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  发送消息
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods and Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>其他联系方式</CardTitle>
                <CardDescription>
                  选择最适合您的联系方式
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                      <Icon className="h-6 w-6 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-medium">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                            {method.value}
                          </a>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>开发者资源</CardTitle>
                <CardDescription>
                  对开发者有用的资源和链接
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">技术支持</h4>
                      <p className="text-sm text-muted-foreground">
                        GitHub Issues 和技术文档
                      </p>
                    </div>
                    <Badge variant="secondary">免费</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">功能请求</h4>
                      <p className="text-sm text-muted-foreground">
                        提交新功能建议
                      </p>
                    </div>
                    <Badge variant="outline">欢迎</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">开源贡献</h4>
                      <p className="text-sm text-muted-foreground">
                        Pull Requests 和代码贡献
                      </p>
                    </div>
                    <Badge variant="default">欢迎</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}