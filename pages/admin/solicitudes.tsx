import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, getDocs, writeBatch, doc } from "firebase/firestore";
import Login from "@/components/Login";
import Link from "next/link";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ADMIN_EMAIL = "al36xiz@gmail.com"; // tu correo

export default function AdminSolicitudes() {
  const [user, setUser] = useState<User | null>(null);
  const [admisiones, setAdmisiones] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchAdmisiones();
    }
  }, [user]);

  const fetchAdmisiones = async () => {
    const querySnapshot = await getDocs(collection(db, "admisiones"));
    const data: any[] = [];
    querySnapshot.forEach((docu) => {
      data.push({ id: docu.id, ...docu.data() });
    });
    setAdmisiones(data);
  };

  // Eliminar registros repetidos por CURP
  const eliminarRepetidos = async () => {
    const snapshot = await getDocs(collection(db, "admisiones"));
    const curpMap: { [curp: string]: any[] } = {};

    snapshot.forEach((docu) => {
      const data = { id: docu.id, ...(docu.data() as { curp: string }) };
      if (!curpMap[data.curp]) {
        curpMap[data.curp] = [];
      }
      curpMap[data.curp].push(data);
    });

    const batch = writeBatch(db);
    let eliminados = 0;

    Object.values(curpMap).forEach((registros: any[]) => {
      if (registros.length > 1) {
        registros.slice(1).forEach((dup) => {
          batch.delete(doc(db, "admisiones", dup.id));
          eliminados++;
        });
      }
    });

    if (eliminados > 0) {
      await batch.commit();
      fetchAdmisiones();
      alert(`Se eliminaron ${eliminados} registros repetidos.`);
    } else {
      alert("No se encontraron registros repetidos.");
    }
  };

  // Exportar a Excel
  const exportarExcel = () => {
    if (admisiones.length === 0) {
      alert("No hay datos para exportar.");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(admisiones);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admisiones");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "admisiones.xlsx");
  };

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mb-6 flex gap-4">
        <Link href="/" className="bg-[#38761D] text-white px-4 py-2 rounded hover:bg-[#285214] transition">Inicio</Link>
        <Link href="/admin/noticias" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Noticias</Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-[#38761D] mb-8">Solicitudes de Admisión</h1>
      <Login onLogin={setUser} onLogout={() => setUser(null)} user={user} />
      {user && user.email === ADMIN_EMAIL ? (
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4 mb-4">
            <button
              onClick={eliminarRepetidos}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
            >
              Eliminar registros repetidos
            </button>
            <button
              onClick={exportarExcel}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Exportar a Excel
            </button>
          </div>
          {admisiones.length === 0 ? (
            <p className="text-gray-500">No hay solicitudes registradas.</p>
          ) : (
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead>
                <tr>
                  <th className="py-2 px-3 text-left">Nombre</th>
                  <th className="py-2 px-3 text-left">Apellido</th>
                  <th className="py-2 px-3 text-left">CURP</th>
                  <th className="py-2 px-3 text-left">Email</th>
                  <th className="py-2 px-3 text-left">Teléfono</th>
                  <th className="py-2 px-3 text-left">Secundaria</th>
                </tr>
              </thead>
              <tbody>
                {admisiones.map((adm) => (
                  <tr key={adm.id} className="border-t">
                    <td className="py-1 px-3">{adm.nombre}</td>
                    <td className="py-1 px-3">{adm.apellido}</td>
                    <td className="py-1 px-3">{adm.curp}</td>
                    <td className="py-1 px-3">{adm.email}</td>
                    <td className="py-1 px-3">{adm.telefono}</td>
                    <td className="py-1 px-3">{adm.secundaria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : user ? (
        <div className="text-center text-red-600 font-semibold mt-8">
          No tienes permisos para ver las solicitudes.
        </div>
      ) : null}
    </main>
  );
}