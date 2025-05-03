'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Sitemap() {
  const sections = [
    {
      title: "Үндсэн",
      links: [
        { name: "Нүүр хуудас", href: "/" },
        { name: "Бидний тухай", href: "/about" },
        { name: "Сургалтууд", href: "/courses" },
        { name: "Багш нар", href: "/instructors" },
        { name: "Холбоо барих", href: "/contact" },
      ],
    },
    {
      title: "Сургалтууд",
      links: [
        { name: "Программчлал", href: "/courses?category=programming" },
        { name: "Дизайн", href: "/courses?category=design" },
        { name: "Бизнес", href: "/courses?category=business" },
        { name: "Маркетинг", href: "/courses?category=marketing" },
        { name: "Хувь хүний хөгжил", href: "/courses?category=personal-development" },
      ],
    },
    {
      title: "Хэрэглэгч",
      links: [
        { name: "Бүртгүүлэх", href: "/register" },
        { name: "Нэвтрэх", href: "/login" },
        { name: "Миний сургалтууд", href: "/my-courses" },
        { name: "Тохиргоо", href: "/settings" },
        { name: "Тусламж", href: "/help" },
      ],
    },
    {
      title: "Хууль эрх зүй",
      links: [
        { name: "Нууцлалын бодлого", href: "/privacy" },
        { name: "Үйлчилгээний нөхцөл", href: "/terms" },
        { name: "Cookie бодлого", href: "/cookies" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Сайтын бүтэц</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
} 