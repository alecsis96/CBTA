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
          <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ubicación</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.0142704224854!2d-92.32680345470729!3d17.16882273920149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f285c344fccf8b%3A0xd1280e0d345b1b62!2sCentro%20de%20Bachillerato%20Tecnologico%20Agropecurio%20No.%2044!5e0!3m2!1ses-419!2smx!4v1754629001615!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}