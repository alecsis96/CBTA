import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Admisiones() {
  return (
    <main className="min-h-screen bg-[#ecf2f5ee] text-gray-900 px-6 py-12 font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#38761D]">Proceso de Admisión</h1>
        <p className="text-lg leading-relaxed mb-6">
          El proceso de admisión está diseñado para seleccionar a los estudiantes más comprometidos con la formación técnica de calidad. Aquí encontrarás los pasos y requisitos necesarios.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Acta de nacimiento (copia y original).</li>
          <li>CURP actualizado.</li>
          <li>Certificado de secundaria.</li>
          <li>4 fotografías tamaño infantil.</li>
          <li>Llenar el formulario de admisión en línea.</li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}