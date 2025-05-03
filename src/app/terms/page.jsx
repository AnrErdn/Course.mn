'use client';

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Үйлчилгээний нөхцөл</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Ерөнхий нөхцөл</h2>
              <p className="text-gray-600">
                Энэхүү нөхцөл нь Course.mn платформыг ашиглахтай холбоотой бүх үйл ажиллагаанд хамаарна.
                Платформыг ашиглах замаар та эдгээр нөхцөлийг хүлээн зөвшөөрсөн гэж үзнэ.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Бүртгэл</h2>
              <p className="text-gray-600">
                Сургалтын платформыг ашиглахын тулд бүртгүүлэх шаардлагатай. Бүртгэл хийхдээ:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Бодит мэдээлэл оруулах</li>
                <li>Нууц үгээ найдвартай хадгалах</li>
                <li>Бүртгэлийн мэдээллийг шинэчлэх</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Сургалтын агуулга</h2>
              <p className="text-gray-600">
                Сургалтын агуулга нь зөвхөн суралцах зорилгоор ашиглагдах ёстой:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Агуулгыг хуулбарлах, дахин хуваарилах хориотой</li>
                <li>Зөвхөн хувийн суралцах зорилгоор ашиглах</li>
                <li>Агуулгыг өөр платформд байршуулах хориотой</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Төлбөр</h2>
              <p className="text-gray-600">
                Сургалтын төлбөртэй холбоотой дүрэм:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Төлбөрийг урьдчилж төлөх</li>
                <li>Буцаан олголтын бодлого</li>
                <li>Төлбөрийн арга хэлбэр</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Хариуцлага</h2>
              <p className="text-gray-600">
                Платформ нь дараахь зүйлд хариуцлага хүлээхгүй:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Техникийн асуудал</li>
                <li>Сургалтын үр дүн</li>
                <li>Гадаад холбоос</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Холбоо барих</h2>
              <p className="text-gray-600">
                Үйлчилгээний нөхцөлтэй холбоотой асуулт, санал хүсэлтээ дараах хаягаар илгээнэ үү:
              </p>
              <p className="mt-2 text-gray-600">
                Имэйл: legal@Course.mn.mn
              </p>
            </section>
          </div>
        </Card>
      </Container>
    </div>
  );
} 