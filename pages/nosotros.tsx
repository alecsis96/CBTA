import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white px-6 py-12">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-700">
          Sobre Nosotros
        </h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Misión</h2>
          <p className="text-lg leading-relaxed">
            Formar técnicos bachilleres competentes, con valores, compromiso social y habilidades para desarrollarse en el ámbito productivo o continuar estudios superiores.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Visión</h2>
          <p className="text-lg leading-relaxed">
            Ser una institución educativa reconocida por su calidad académica, formación integral y vinculación efectiva con el sector productivo y la comunidad.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Valores</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Responsabilidad</li>
            <li>Respeto</li>
            <li>Disciplina</li>
            <li>Compromiso</li>
            <li>Honestidad</li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}