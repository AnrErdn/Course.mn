"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, Heart, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);
  const searchRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  // Sample course data - replace with your actual data source
  const allCourses = [
    {
      title: "Web Development Bootcamp",
      titleMn: "Веб Хөгжүүлэлтийн Сургалт",
      description: "Learn full-stack web development from scratch",
      descriptionMn: "Веб хөгжүүлэлтийн үндсэн мэдлэгээс эхлэн суралцах",
      category: "Programming",
      categoryMn: "Программчлал",
      url: "/courses/web-development"
    },
    {
      title: "Data Science Fundamentals",
      titleMn: "Өгөгдлийн Шинжлэх Ухаан",
      description: "Master data analysis and machine learning",
      descriptionMn: "Өгөгдөлд дүн шинжилгээ хийх, машин сургалтын үндэс",
      category: "Data Science",
      categoryMn: "Өгөгдлийн Шинжлэх Ухаан",
      url: "/courses/data-science"
    },
    {
      title: "UI/UX Design Masterclass",
      titleMn: "UI/UX Дизайны Мастер Анги",
      description: "Create beautiful and user-friendly interfaces",
      descriptionMn: "Хэрэглэгчид тохиромжтой, гоё интерфэйс бүтээх",
      category: "Design",
      categoryMn: "Дизайн",
      url: "/courses/ui-ux"
    },
    {
      title: "Python for Beginners",
      titleMn: "Python Програмчлалын Үндэс",
      description: "Start your programming journey with Python",
      descriptionMn: "Python хэлээр програмчлалын үндсийг сурах",
      category: "Programming",
      categoryMn: "Программчлал",
      url: "/courses/python"
    },
    {
      title: "Machine Learning Basics",
      titleMn: "Машин Сургалтын Үндэс",
      description: "Introduction to AI and machine learning concepts",
      descriptionMn: "Хиймэл оюун, машин сургалтын үндсэн ойлголтууд",
      category: "Data Science",
      categoryMn: "Өгөгдлийн Шинжлэх Ухаан",
      url: "/courses/machine-learning"
    },
    {
      title: "Digital Marketing Course",
      titleMn: "Цахим Маркетингийн Сургалт",
      description: "Learn modern marketing strategies and tools",
      descriptionMn: "Орчин үеийн маркетингийн стратеги, хэрэгслүүд",
      category: "Business",
      categoryMn: "Бизнес",
      url: "/courses/digital-marketing"
    },
    {
      title: "Mobile App Development",
      titleMn: "Мобайл Апп Хөгжүүлэлт",
      description: "Build iOS and Android applications",
      descriptionMn: "iOS болон Android аппликейшн бүтээх",
      category: "Programming",
      categoryMn: "Программчлал",
      url: "/courses/mobile-development"
    },
    {
      title: "Graphic Design Fundamentals",
      titleMn: "График Дизайны Үндэс",
      description: "Master the basics of visual design",
      descriptionMn: "Визуал дизайны үндсэн мэдлэг",
      category: "Design",
      categoryMn: "Дизайн",
      url: "/courses/graphic-design"
    }
  ];

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };

  // Filter courses based on search query in both English and Mongolian
  const filteredCourses = allCourses.filter(course => {
    const searchLower = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(searchLower) ||
      course.titleMn.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.descriptionMn.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower) ||
      course.categoryMn.toLowerCase().includes(searchLower)
    );
  });

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearchResults = (value) => {
    const results = allCourses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase()) ||
      course.titleMn.toLowerCase().includes(value.toLowerCase()) ||
      course.description.toLowerCase().includes(value.toLowerCase()) ||
      course.descriptionMn.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <NavigationMenu className="pl-16">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="font-bold text-xl">
                  EduTech
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                Сургалтууд
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full w-full md:w-auto">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-popover border rounded-lg shadow-lg">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                          Бүх Сургалтууд
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Манай бүх сургалтуудыг судлах
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses/online"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-foreground">
                          Онлайн Сургалтууд
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Хаанаас ч, хэзээ ч суралцах боломжтой
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses/in-person"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-foreground">
                          Танхимын Сургалтууд
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Мэргэжилтэн багштай хамт суралцах
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div ref={searchRef} className="relative">
                <div className="flex h-10 w-80 items-center rounded-md border border-input bg-background px-3 text-sm ring-offset-background">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search courses... / Сургалт хайх..."
                    className="ml-2 w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                {showResults && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-background border rounded-md shadow-lg max-h-[400px] overflow-y-auto">
                    <div className="p-3">
                      {filteredCourses.length > 0 ? (
                        <div className="space-y-3">
                          {filteredCourses.map((course) => (
                            <div
                              key={course.title}
                              className="group flex flex-col gap-2 p-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors border border-border/50 hover:border-primary/20"
                            >
                              <div className="space-y-1">
                                <div className="font-medium text-base group-hover:text-primary transition-colors">{course.title}</div>
                                <div className="text-sm text-muted-foreground">{course.titleMn}</div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {course.category.split(',').map((category) => (
                                  <span 
                                    key={category} 
                                    className="text-xs bg-muted/50 px-2 py-1 rounded-full border border-border/50 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors"
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="p-3 cursor-pointer hover:bg-accent/50 rounded-md border-t border-border/50 group">
                            <Link 
                              href={`/courses?search=${encodeURIComponent(searchQuery)}`} 
                              className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors"
                            >
                              <Search className="h-4 w-4" />
                              <span className="text-sm font-medium">
                                See all results for "{searchQuery}" / "{searchQuery}" гэсэн бүх үр дүнг харах
                              </span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="py-6 text-center space-y-2">
                          <div className="text-sm text-muted-foreground">
                            No results found for "{searchQuery}". / "{searchQuery}" гэсэн үр дүн олдсонгүй.
                          </div>
                          <div className="text-xs text-muted-foreground/70">
                            Try different keywords / Өөр түлхүүр үгс ашиглана уу
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4 pr-16">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites" className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Дуртай</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/my-courses" className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Миний Сургалтууд</span>
            </Link>
          </Button>
          <div className="flex items-center space-x-4">
            <UserDropdown user={{ name: "Б.Болд", email: "bold@example.com" }} />
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search courses... / Сургалт хайх..." 
          onValueChange={handleSearchResults}
        />
        <CommandList>
          <CommandEmpty>No results found / Үр дүн олдсонгүй</CommandEmpty>
          <CommandGroup heading="Courses / Сургалтууд">
            {searchResults.map((course) => (
              <CommandItem 
                key={course.title}
                value={course.title}
                onSelect={() => {
                  window.location.href = course.url;
                }}
              >
                <div>
                  <div className="font-medium">{course.titleMn} / {course.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {course.descriptionMn}
                    <br />
                    {course.description}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}) 