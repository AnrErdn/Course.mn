'use client';

import { BackgroundAnimations } from "@/components/background-animations";
import { HeroAnimations } from "@/components/hero-animations";
import { TrustedCompanies } from "@/components/trusted-companies";
import { CourseCategories } from "@/components/course-categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, Users, Rocket } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden min-h-[90vh] bg-gradient-to-b from-gray-50 to-gray-100">
          <BackgroundAnimations />
          
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 space-y-8 max-w-4xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Rocket className="h-5 w-5" />
              <span className="text-sm font-medium">Шинэ Платформ</span>
            </div>

            <h1 className="hero-title text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Программчлал, дизайн болон бусад ур чадваруудыг
              <br />
              <span className="text-primary">EduTech-ээр суралцаарай</span>
            </h1>
            
            <p className="hero-description text-xl text-gray-600 max-w-2xl">
              Программчлал, дизайн болон бусад технологийн ур чадваруудыг суралцах хамгийн сайн платформ.
              Мэргэжилтэн багштай хамт өнөөдрөөс эхлэн суралцаарай.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 group" asChild>
                <Link href="/courses">
                  Суралцаж эхлэх
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/about">
                  Дэлгэрэнгүй мэдээлэл
                </Link>
              </Button>
            </div>
          </div>
          <HeroAnimations />
        </div>

        {/* Features Section */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card h-full hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Иж бүрэн Сургалтууд</h3>
                  <p className="text-muted-foreground">
                    Мэргэжилтэн багштай хамт сайтар бэлтгэсэн сургалтууд
                  </p>
                </CardContent>
              </Card>
              <Card className="feature-card h-full hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Мэргэжилтэн Багш</h3>
                  <p className="text-muted-foreground">
                    Туршлагатай мэргэжилтнүүдээс заавар авна
                  </p>
                </CardContent>
              </Card>
              <Card className="feature-card h-full hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Хамтын Суралцалт</h3>
                  <p className="text-muted-foreground">
                    Суралцагчдын хамт олонд нэгдэж хамтдаа хөгжицгөөе
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <TrustedCompanies />

        {/* Course Categories Section */}
        <CourseCategories />
      </main>
      <Footer />
    </div>
  );
} 