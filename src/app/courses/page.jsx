'use client';

import { courses } from '@/data/courses';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const filteredCourses = searchQuery
    ? courses.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.mongolianTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.categories.some(category => 
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : courses;

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          {searchQuery 
            ? `Search Results for "${searchQuery}" / "${searchQuery}" гэсэн үр дүн`
            : 'All Courses / Бүх Сургалтууд'
          }
        </h1>
        {searchQuery && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            {filteredCourses.length} results found / {filteredCourses.length} үр дүн олдлоо
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.mongolianTitle}</p>
            <p className="text-sm text-gray-500 mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-2">
              {course.categories.map((category) => (
                <span key={category} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 