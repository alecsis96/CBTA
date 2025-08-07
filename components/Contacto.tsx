// components/Contacto.tsx
import Link from "next/link";

export default function Contacto() {
  return (
    <section className="py-16 px-6 bg-[#1E293B]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#38761D]">Contacto</h2>
        <p className="mb-6 text-gray-300">
          ¿Tienes dudas? Escríbenos para más información.
        </p>
        <Link href="/contacto">
          <button className="bg-[#38761D] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
            Ir al formulario de contacto
          </button>
        </Link>
      </div>
    </section>
  );
}
