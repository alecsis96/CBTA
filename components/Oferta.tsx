// components/Oferta.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Oferta() {
  const carreras = [
    "Técnico en Agropecuaria",
    "Técnico en Administración",
    "Técnico en Informática",
  ];

  return (
    <section id="oferta" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#38761D] mb-12">Oferta Académica</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {carreras.map((carrera, index) => (
          <Card key={index} className="bg-[#38761D] text-gray-300 p-6 rounded-xl shadow hover:shadow-lg transition">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#38761D]">{carrera}</h3>
              <p>Conoce más sobre la carrera de {carrera.toLowerCase()}.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
