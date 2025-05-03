'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart2,
  BookOpen,
  Settings,
  Users,
  MessageSquare,
  Bell,
  HelpCircle,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: Home,
      label: "Хяналтын самбар",
      href: "/dashboard",
    },
    {
      icon: BarChart2,
      label: "Аналитик",
      href: "/dashboard/analytics",
    },
    {
      icon: BookOpen,
      label: "Миний сургалтууд",
      href: "/dashboard/courses",
    },
    {
      icon: Users,
      label: "Суралцагчид",
      href: "/dashboard/students",
    },
    {
      icon: MessageSquare,
      label: "Сэтгэгдэл",
      href: "/dashboard/comments",
    },
    {
      icon: Bell,
      label: "Мэдэгдэл",
      href: "/dashboard/notifications",
    },
    {
      icon: Settings,
      label: "Тохиргоо",
      href: "/dashboard/settings",
    },
    {
      icon: HelpCircle,
      label: "Тусламж",
      href: "/dashboard/help",
    },
  ];

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">EdTech Studio</h2>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? "bg-gray-100" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 