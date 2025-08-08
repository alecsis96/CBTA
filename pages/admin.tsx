import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import Login from "@/components/Login";
import Link from "next/link";

const ADMIN_EMAIL = "al36xiz@gmail.com"; // <-- pon aquí tu correo

export default function AdminIndex() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Si no está autenticado, muestra el login
  if (!user) {
    return (
      <main className="min-h-screen bg-white px-6 py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-[#38761D] mb-12">
          Modo Administrador
        </h1>
        <Login onLogin={setUser} onLogout={() => setUser(null)} user={user} />
      </main>
    );
  }

  // Si está autenticado pero no es admin, muestra mensaje de acceso denegado
  if (user.email !== ADMIN_EMAIL) {
    return (
      <main className="min-h-screen bg-white px-6 py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-[#38761D] mb-12">
          Modo Administrador
        </h1>
        <div className="text-center text-red-600 font-semibold mt-8">
          No tienes permisos para acceder a esta sección.
        </div>
      </main>
    );
  }

  // Si es admin, muestra los botones de navegación
  return (
    <main className="min-h-screen bg-white px-6 py-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-[#38761D] mb-12">
        Modo Administrador
      </h1>
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link
          href="/"
          className="bg-gray-700 text-white px-6 py-4 rounded text-center text-lg font-semibold hover:bg-gray-900 transition"
        >
          Inicio
        </Link>
        <Link
          href="/admin/noticias"
          className="bg-[#38761D] text-white px-6 py-4 rounded text-center text-lg font-semibold hover:bg-[#285214] transition"
        >
          Administrar Noticias
        </Link>
        <Link
          href="/admin/solicitudes"
          className="bg-blue-600 text-white px-6 py-4 rounded text-center text-lg font-semibold hover:bg-blue-800 transition"
        >
          Solicitudes de Admisión
        </Link>
      </div>
    </main>
  );
}