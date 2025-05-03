'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Search, MessageSquare, Phone, Mail } from "lucide-react";

export default function Help() {
  const faqs = [
    {
      question: "Сургалт хэрхэн худалдаж авах вэ?",
      answer: "Сургалт худалдаж авахын тулд эхлээд бүртгүүлэх шаардлагатай. Бүртгүүлсний дараа хүссэн сургалтаа сонгон төлбөр төлөх боломжтой.",
    },
    {
      question: "Төлбөр төлөх аргууд",
      answer: "Бид банкны карт, QPay, SocialPay зэрэг олон төрлийн төлбөрийн системийг дэмждэг.",
    },
    {
      question: "Сургалтын сертификат хэрхэн авах вэ?",
      answer: "Сургалтыг амжилттай төгссөний дараа та автоматаар сертификат авах боломжтой.",
    },
    {
      question: "Сургалтын материалыг хэрхэн ашиглах вэ?",
      answer: "Сургалтын материалыг онлайн харах боломжтой бөгөөд шаардлагатай бол татаж авах боломжтой.",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Утас",
      description: "+(976) 7000-0000",
      action: "Захидал бичих",
    },
    {
      icon: Mail,
      title: "И-мэйл",
      description: "help@edtech.mn",
      action: "И-мэйл илгээх",
    },
    {
      icon: MessageSquare,
      title: "Чат",
      description: "Ажлын цаг: Даваа-Баасан 09:00-18:00",
      action: "Чат эхлүүлэх",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero Section */}
          <Card className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Тусламж</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Танд ямар нэгэн асуудал тулгарсан уу? Бид танд туслах болно.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Асуултаа бичнэ үү..."
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Түгээмэл Асуултууд</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Бидэнтэй Холбогдох</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      {method.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
} 