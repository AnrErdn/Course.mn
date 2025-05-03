'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1-р сар", revenue: 4000, students: 2400 },
  { name: "2-р сар", revenue: 3000, students: 1398 },
  { name: "3-р сар", revenue: 2000, students: 9800 },
  { name: "4-р сар", revenue: 2780, students: 3908 },
  { name: "5-р сар", revenue: 1890, students: 4800 },
  { name: "6-р сар", revenue: 2390, students: 3800 },
];

const courseData = [
  { name: "React", students: 4000, rating: 4.8 },
  { name: "JavaScript", students: 3000, rating: 4.7 },
  { name: "Python", students: 2000, rating: 4.9 },
  { name: "Node.js", students: 2780, rating: 4.6 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Нийт орлого</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₮15,231,000</div>
            <p className="text-xs text-muted-foreground">
              Өнгөрсөн сараас +20.1%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Суралцагчид</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              Өнгөрсөн сараас +180
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Сургалтууд</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Идэвхтэй сургалтууд
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Дундаж үнэлгээ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">
              Нийт үнэлгээний дундаж
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Орлого ба суралцагчид</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#8884d8" name="Орлого" />
                  <Bar dataKey="students" fill="#82ca9d" name="Суралцагчид" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Сургалтуудын үзүүлэлт</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#8884d8" name="Суралцагчид" />
                  <Bar dataKey="rating" fill="#82ca9d" name="Үнэлгээ" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 