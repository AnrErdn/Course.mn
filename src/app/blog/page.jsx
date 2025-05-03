'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Онлайн Сургалтын Ирээдүй",
      excerpt: "Онлайн сургалтын түүх, хөгжил, ирээдүйн чиг хандлага",
      author: "Б.Болд",
      date: "2024-03-15",
      readTime: "5 мин",
      category: "Боловсрол",
      image: "/images/blog/online-education.jpg",
    },
    {
      title: "Технологийн Мэргэжилтэн Болох",
      excerpt: "Технологийн салбарт мэргэжилтэн болох арга зам",
      author: "Ц.Мөнхбат",
      date: "2024-03-10",
      readTime: "7 мин",
      category: "Технологи",
      image: "/images/blog/tech-career.jpg",
    },
    {
      title: "Дижитал Бизнес Эхлүүлэх",
      excerpt: "Дижитал бизнес эхлүүлэхэд шаардлагатай алхамууд",
      author: "Д.Сүхбат",
      date: "2024-03-05",
      readTime: "8 мин",
      category: "Бизнес",
      image: "/images/blog/digital-business.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero Section */}
          <Card className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Блог</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Боловсрол, технологи, бизнес болон бусад сонирхолтой сэдвүүдийн талаар
              мэргэжилтнүүдийн блог нийтлэлүүд
            </p>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Categories Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Сэдвүүд</h2>
            <div className="flex flex-wrap gap-4">
              {["Боловсрол", "Технологи", "Бизнес", "Дизайн", "Хувь Хүний Хөгжил"].map(
                (category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
} 