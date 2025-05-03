'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Нууцлалын бодлого</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Хувийн мэдээллийн цуглуулалт</h2>
              <p className="text-gray-600">
                Бид таны хувийн мэдээллийг дараах үед цуглуулдаг:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Бүртгүүлэх үед</li>
                <li>Сургалт худалдан авах үед</li>
                <li>Тусламж хүсэх үед</li>
                <li>Сургалтын үнэлгээ өгөх үед</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Цуглуулсан мэдээлэл</h2>
              <p className="text-gray-600">
                Бид дараах төрлийн мэдээллийг цуглуулдаг:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Нэр, имэйл хаяг</li>
                <li>Төлбөрийн мэдээлэл</li>
                <li>Сургалтын явц, үнэлгээ</li>
                <li>Хэрэглээний мэдээлэл</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Мэдээллийг ашиглах</h2>
              <p className="text-gray-600">
                Бид таны мэдээллийг дараах зорилгоор ашигладаг:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Үйлчилгээг сайжруулах</li>
                <li>Сургалтын агуулгыг боловсронгуй болгох</li>
                <li>Техникийн дэмжлэг үзүүлэх</li>
                <li>Хууль эрх зүйн шаардлагад нийцүүлэх</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Мэдээллийг хамгаалах</h2>
              <p className="text-gray-600">
                Бид таны мэдээллийг хамгаалахын тулд дараах арга хэмжээг авдаг:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>SSL шифрлэлт</li>
                <li>Хяналтын систем</li>
                <li>Аюулгүй байдлын бодлого</li>
                <li>Ажилтнуудад сургалт</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Холбоо барих</h2>
              <p className="text-gray-600">
                Нууцлалын бодлоготой холбоотой асуулт, санал хүсэлтээ дараах хаягаар илгээнэ үү:
              </p>
              <p className="mt-2 text-gray-600">
                Имэйл: privacy@edtech.mn
              </p>
            </section>
          </div>
        </Card>
      </Container>
    </div>
  );
} 