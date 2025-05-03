'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Users, BookOpen, GraduationCap, Rocket } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Иж бүрэн Сургалтууд",
      description: "Мэргэжилтэн багштай хамт сайтар бэлтгэсэн сургалтууд",
    },
    {
      icon: GraduationCap,
      title: "Мэргэжилтэн Багш",
      description: "Туршлагатай мэргэжилтнүүдээс заавар авна",
    },
    {
      icon: Users,
      title: "Хамтын Суралцалт",
      description: "Суралцагчдын хамт олонд нэгдэж хамтдаа хөгжицгөөе",
    },
    {
      icon: Rocket,
      title: "Мэргэжлийн Хөгжил",
      description: "Таны мэргэжлийн хөгжилд дэмжлэг үзүүлэхэд бэлэн",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero Section */}
          <Card className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Бидний тухай</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EdTech нь Монголын хамгийн том онлайн сургалтын платформ бөгөөд таны мэргэжлийн хөгжилд дэмжлэг үзүүлэхэд бэлэн.
            </p>
          </Card>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Mission Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Бидний зорилго</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Бидний зорилго бол Монголын залуучуудад чанартай боловсрол олгох, тэдний мэргэжлийн хөгжилд дэмжлэг үзүүлэх явдал юм.
              </p>
              <p>
                Манай платформ нь програмчлал, дизайн, бизнес болон бусад олон төрлийн сургалтуудыг санал болгодог.
                Мэргэжилтэн багштай хамт суралцаж, практик дадлага хийх боломжтой.
              </p>
              <p>
                Бид суралцагчдын амжилтанд итгэдэг бөгөөд тэдний хөгжилд дэмжлэг үзүүлэхэд бэлэн байна.
              </p>
            </div>
          </Card>

          {/* Stats Section */}
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-gray-600">Суралцагч</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Сургалт</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
                <p className="text-gray-600">Багш</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
} 