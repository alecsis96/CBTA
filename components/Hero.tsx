// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src="/logo-cbta44.png" alt="Logo CBTA 44" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
        <h1 className="text-4xl md:text-6xl font-bold text-[#38761D]">
          Centro de Bachillerato Tecnológico #44
        </h1>
        <p className="text-xl text-black max-w-xl">
          Educación técnica con visión al futuro
        </p>
        <Link
          href="#oferta"
          className="bg-[#38761D] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
        >
          Conoce más
        </Link>
      </div>
    </section>
  );
}
