// components/Noticias.tsx
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface Noticia {
  id?: string;
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  enlace: string;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "noticias"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: Noticia[] = [];
      querySnapshot.forEach((docu) => {
        data.push({ id: docu.id, ...docu.data() } as Noticia);
      });
      setNoticias(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="py-16 px-6 bg-white text-gray-900" aria-label="Noticias recientes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#38761D] mb-12">Noticias</h2>
        {loading ? (
          <p className="text-center text-gray-500">Cargando noticias...</p>
        ) : noticias.length === 0 ? (
          <p className="text-center text-gray-500">No hay noticias disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="bg-[#eafbe7] rounded-xl shadow p-6 flex flex-col">
                <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#38761D]">{noticia.titulo}</h3>
                <p className="text-sm text-gray-500 mb-2">{noticia.fecha}</p>
                <p className="mb-4">{noticia.resumen}</p>
                <a
                  href={noticia.enlace}
                  className="mt-auto inline-block bg-[#38761D] text-white px-4 py-2 rounded hover:bg-[#285214] transition"
                >
                  Leer más
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
