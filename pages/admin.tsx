import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import Login from "@/components/Login";
import Link from "next/link";

interface Noticia {
  id?: string;
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  enlace: string;
}

const ADMIN_EMAIL = "al36xiz@gmail.com"; // <-- pon aquí tu correo

export default function AdminNoticias() {
  const [user, setUser] = useState<User | null>(null);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [form, setForm] = useState<Omit<Noticia, "id">>({
    titulo: "",
    fecha: "",
    resumen: "",
    imagen: "",
    enlace: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) fetchNoticias();
  }, [user]);

  const fetchNoticias = async () => {
    const querySnapshot = await getDocs(collection(db, "noticias"));
    const data: Noticia[] = [];
    querySnapshot.forEach((docu) => {
      data.push({ id: docu.id, ...docu.data() } as Noticia);
    });
    setNoticias(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "noticias"), form);
    setForm({ titulo: "", fecha: "", resumen: "", imagen: "", enlace: "" });
    fetchNoticias();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "noticias", id));
    fetchNoticias();
  };

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-block bg-[#38761D] text-white px-4 py-2 rounded hover:bg-[#285214] transition"
        >
          Inicio
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-[#38761D] mb-8">Administrador de Noticias</h1>
      <Login onLogin={setUser} onLogout={() => setUser(null)} user={user} />
      {user && user.email === ADMIN_EMAIL ? (
        <>
          <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-lg shadow flex flex-col gap-4 max-w-xl mx-auto">
            <input type="text" name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required className="border rounded px-3 py-2" />
            <input type="text" name="fecha" placeholder="Fecha" value={form.fecha} onChange={handleChange} required className="border rounded px-3 py-2" />
            <textarea name="resumen" placeholder="Resumen" value={form.resumen} onChange={handleChange} required className="border rounded px-3 py-2" />
            <input type="text" name="imagen" placeholder="URL de la imagen" value={form.imagen} onChange={handleChange} required className="border rounded px-3 py-2" />
            <input type="text" name="enlace" placeholder="Enlace" value={form.enlace} onChange={handleChange} required className="border rounded px-3 py-2" />
            <button type="submit" className="bg-[#38761D] text-white font-semibold px-4 py-2 rounded hover:bg-[#285214] transition">Agregar Noticia</button>
          </form>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Noticias actuales</h2>
            <ul>
              {noticias.map((n) => (
                <li key={n.id} className="mb-4 bg-gray-100 p-4 rounded flex justify-between items-center">
                  <span>
                    <b>{n.titulo}</b> - {n.fecha}
                  </span>
                  <button onClick={() => n.id && handleDelete(n.id)} className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : user ? (
        <div className="text-center text-red-600 font-semibold mt-8">
          No tienes permisos para administrar las noticias.
        </div>
      ) : null}
    </main>
  );
}