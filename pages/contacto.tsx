import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#38761D]">Contáctanos</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Correo electrónico</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-[#38761D] text-white px-4 py-2 rounded">
            Enviar mensaje
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}