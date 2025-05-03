'use client';

import { Search } from "lucide-react";
import { UserDropdown } from "@/components/user-dropdown";

export function Topbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Хайх..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <UserDropdown user={{ name: "Б.Болд", email: "bold@example.com" }} />
        </div>
      </div>
    </div>
  );
} 