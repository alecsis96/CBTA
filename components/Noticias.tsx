// components/Noticias.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Noticia {
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  enlace: string;
}

const noticias: Noticia[] = [
  {
    titulo: "Ceremonia de Graduación 2025",
    fecha: "29 de Julio 2025",
    resumen: "Celebramos la graduación de nuestros estudiantes con orgullo y alegría.",
    imagen: "/noticias/img1.jpg",
    enlace: "/noticias/graduacion-2025",
  },
  {
    titulo: "Comunicado",
    fecha: "15 de Junio 2025",
    resumen: "ATENTO COMUNICADO Alumn@s de Nuevo Ingreso al CBTA 44, Ciclo Escolar 2025-2026 .",
    imagen: "/noticias/comunicado.jpg",
    enlace: "/noticias/feria-agropecuaria-2025",
  },
  {
    titulo: "Mascota CBTA #44",
    fecha: "15 de Julio 2025",
    resumen: "Llegó la Mascota del CBTA 44 .",
    imagen: "/noticias/mascota2.jpg",
    enlace: "/noticias/concurso-robotica-2025",
  },
];

export default function Noticias() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900" aria-label="Noticias recientes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#38761D] mb-12">Noticias</h2>
        {noticias.length === 0 ? (
          <p className="text-center text-gray-500">No hay noticias disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
                aria-label={`Noticia: ${noticia.titulo}`}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={noticia.imagen}
                    alt={`Imagen de la noticia: ${noticia.titulo}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#121F3D] mb-1">{noticia.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-2">{noticia.fecha}</p>
                  <p className="text-base text-gray-800 mb-4">{noticia.resumen}</p>
                  <Link
                    href={noticia.enlace}
                    className="text-[#38761D] font-semibold hover:underline"
                    aria-label={`Leer más sobre ${noticia.titulo}`}
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
