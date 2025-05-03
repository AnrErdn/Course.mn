'use client';

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-white text-xl font-bold">EdTech</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Монголын хамгийн том онлайн сургалтын платформ. Бид таны мэргэжлийн хөгжилд дэмжлэг үзүүлэхэд бэлэн.
              </p>
            </div>
            <div className="flex space-x-5">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Холбоос</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Ажлын байр
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Тусламж
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Төрлүүд</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/courses?category=programming" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Программчлал
                </Link>
              </li>
              <li>
                <Link href="/courses?category=design" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Дизайн
                </Link>
              </li>
              <li>
                <Link href="/courses?category=business" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Бизнес
                </Link>
              </li>
              <li>
                <Link href="/courses?category=marketing" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Маркетинг
                </Link>
              </li>
              <li>
                <Link href="/courses?category=personal-development" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Хувь хүний хөгжил
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Хууль эрх зүй</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Нууцлалын бодлого
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie бодлого
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Сайтын бүтэц
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex justify-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EdTech. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 