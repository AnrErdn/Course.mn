'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Briefcase, Users, Heart, Globe } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Мэргэжлийн Хөгжил",
      description: "Тогтмол сургалт, семинар, конференцэд оролцох боломж",
    },
    {
      icon: Users,
      title: "Хамтын Ажиллагаа",
      description: "Мэргэжилтнүүдтэй хамтран ажиллах боломж",
    },
    {
      icon: Heart,
      title: "Эрүүл Мэнд",
      description: "Эрүүл мэндийн даатгал, фитнес клубэд хамрагдах боломж",
    },
    {
      icon: Globe,
      title: "Уян Хатан Ажил",
      description: "Удаан хугацааны амралт, уян хатан ажлын цаг",
    },
  ];

  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Технологи",
      location: "Улаанбаатар",
      type: "Бүтэн цагийн",
    },
    {
      title: "UX/UI Designer",
      department: "Дизайн",
      location: "Улаанбаатар",
      type: "Бүтэн цагийн",
    },
    {
      title: "Сургалтын Зохицуулагч",
      department: "Боловсрол",
      location: "Улаанбаатар",
      type: "Бүтэн цагийн",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero Section */}
          <Card className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Ажлын Байр</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Бидэнтэй хамтран ажиллах боломжийг хайж байна уу? Манай багт нэгдэж, 
              Монголын боловсролын салбарт хувь нэмэр оруулаарай.
            </p>
          </Card>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Open Positions Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Нээлттэй Ажлын Байр</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="text-gray-600">{position.department}</span>
                        <span className="text-gray-600">{position.location}</span>
                        <span className="text-gray-600">{position.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      Анкет Илгээх
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Culture Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Бидний Соёл</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Бид өөрсдийн баг, суралцагчдынхаа хөгжилд дэмжлэг үзүүлэхэд итгэдэг.
                Манай ажилтнууд нь тус бүр өөрийн гэсэн онцлогтой бөгөөд бид тэдний 
                санаа бодлыг сонсож, хөгжилд нь дэмжлэг үзүүлдэг.
              </p>
              <p>
                Бидний ажил орчин нь нээлттэй, хамтын ажиллагаатай, инновацид чиглэсэн.
                Ажилтнууд нь бие биенээ дэмжиж, хамтдаа хөгжихөд дэмжлэг үзүүлдэг.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
} 