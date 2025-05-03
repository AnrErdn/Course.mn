'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Smartphone, ChartBar, Globe, Shield, Brain, Star, Users, Clock } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Программчлал",
    description: "Python, JavaScript, Java болон бусад хэлнүүд",
    count: "1,234",
    rating: 4.7,
    students: "1.2K",
    hours: 120,
    image: "/images/categories/programming.jpg"
  },
  {
    icon: Palette,
    title: "Дизайн",
    description: "UI/UX, График дизайн, 3D загварчлал",
    count: "856",
    rating: 4.5,
    students: "856",
    hours: 95,
    image: "/images/categories/design.jpg"
  },
  {
    icon: Database,
    title: "Мэдээлэл зүй",
    description: "Data Science, AI, Machine Learning",
    count: "567",
    rating: 4.8,
    students: "2.1K",
    hours: 150,
    image: "/images/categories/data-science.jpg"
  },
  {
    icon: Smartphone,
    title: "Мобайл хөгжүүлэлт",
    description: "iOS, Android, React Native",
    count: "789",
    rating: 4.6,
    students: "1.5K",
    hours: 110,
    image: "/images/categories/mobile.jpg"
  },
  {
    icon: ChartBar,
    title: "Бизнес",
    description: "Маркетинг, Менежмент, Санхүү",
    count: "1,012",
    rating: 4.4,
    students: "3.2K",
    hours: 85,
    image: "/images/categories/business.jpg"
  },
  {
    icon: Globe,
    title: "Веб хөгжүүлэлт",
    description: "Frontend, Backend, Full Stack",
    count: "1,345",
    rating: 4.7,
    students: "2.8K",
    hours: 130,
    image: "/images/categories/web.jpg"
  },
  {
    icon: Shield,
    title: "Кибер аюулгүй байдал",
    description: "Ethical Hacking, Network Security",
    count: "234",
    rating: 4.9,
    students: "456",
    hours: 75,
    image: "/images/categories/cybersecurity.jpg"
  },
  {
    icon: Brain,
    title: "Хувь хүний хөгжил",
    description: "Удирдлага, Харилцаа холбоо, Цаг хугацааны менежмент",
    count: "456",
    rating: 4.3,
    students: "1.8K",
    hours: 65,
    image: "/images/categories/personal.jpg"
  },
];

export function CourseCategories() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Сургалтын төрлүүд</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Таны сонирхолд тохирсон 1000 гаруй сургалтууд
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link href={`/courses?category=${category.title.toLowerCase()}`} key={index}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center bg-primary/90 text-white px-2 py-1 rounded">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{category.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{category.count} сургалт</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{category.students}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{category.hours} цаг</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/categories" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
            Бүх төрлийг үзэх
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}