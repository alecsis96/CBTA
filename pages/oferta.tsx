import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Oferta() {
  const carreras = [
    "Técnico en Agropecuaria",
    "Técnico en Administración",
    "Técnico en Informática",
    "Técnico en Ofimática",
    "Técnico en Desarrollo Comunitario",
  ];

  return (
    <main className="min-h-screen bg-[#ecf2f5ee] text-gray-900 px-6 py-12 font-sans">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#38761D]">
          Oferta Académica
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carreras.map((carrera, index) => (
            <Card key={index} className="bg-white shadow-md p-6 rounded-lg">
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#38761D]">{carrera}</h3>
                <p>Formación técnica especializada en el área de {carrera.toLowerCase()}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}