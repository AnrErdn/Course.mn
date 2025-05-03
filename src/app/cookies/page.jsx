'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Cookie бодлого</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Cookie гэж юу вэ?</h2>
              <p className="text-gray-600">
                Cookie нь таны компьютер эсвэл мобайл төхөөрөмж дээр хадгалагдах жижиг текст файл юм.
                Энэ нь вэбсайтыг таны хэрэгцээнд тохируулах, үйлчилгээг сайжруулахад тусалдаг.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Бидний ашигладаг Cookie-ууд</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Үндсэн Cookie-ууд</h3>
                  <p className="text-gray-600 mt-2">
                    Вэбсайтын үндсэн функцэд зайлшгүй шаардлагатай cookie-ууд:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                    <li>Нэвтрэх мэдээлэл</li>
                    <li>Худалдан авалтын сагс</li>
                    <li>Хэрэглэгчийн тохиргоо</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Аналитик Cookie-ууд</h3>
                  <p className="text-gray-600 mt-2">
                    Вэбсайтын ашиглалтыг шинжлэхэд ашиглагддаг cookie-ууд:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                    <li>Зочлох хугацаа</li>
                    <li>Хуудасны үзэлт</li>
                    <li>Хэрэглэгчийн зан төлөв</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Функциональ Cookie-ууд</h3>
                  <p className="text-gray-600 mt-2">
                    Нэмэлт функц үзүүлэхэд ашиглагддаг cookie-ууд:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                    <li>Хэлний сонголт</li>
                    <li>Тохиргооны хадгалалт</li>
                    <li>Сургалтын явц</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Cookie-уудыг удирдах</h2>
              <p className="text-gray-600">
                Та cookie-уудыг дараах байдлаар удирдаж болно:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Хөтөч тохиргоогоор идэвхгүй болгох</li>
                <li>Cookie удирдлагын хэрэгслээр удирдах</li>
                <li>Тодорхой төрлийн cookie-уудыг идэвхгүй болгох</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Cookie-уудын хадгалалтын хугацаа</h2>
              <p className="text-gray-600">
                Cookie-уудын хадгалалтын хугацаа нь тэдгээрийн төрлөөс хамаарна:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Үндсэн cookie-ууд: Хугацаа хязгааргүй</li>
                <li>Аналитик cookie-ууд: 2 жил</li>
                <li>Функциональ cookie-ууд: 1 жил</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Холбоо барих</h2>
              <p className="text-gray-600">
                Cookie бодлоготой холбоотой асуулт, санал хүсэлтээ дараах хаягаар илгээнэ үү:
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