import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Persona {
  nombre: string;
  cargo: string;
  area: string;
}

const personal: Persona[] = [
  { nombre: "Mtra. Ana López", cargo: "Directora", area: "Administrativo" },
  { nombre: "Ing. Juan Pérez", cargo: "Docente", area: "Informática" },
  { nombre: "Lic. María García", cargo: "Docente", area: "Administración" },
  { nombre: "MVZ Carlos Ruiz", cargo: "Docente", area: "Agropecuaria" },
  { nombre: "Srta. Laura Torres", cargo: "Secretaria", area: "Administrativo" },
  { nombre: "Oscar Alexis Gonzalez Perez", cargo: "Intendente", area: "Administrativo" },
  // Agrega más personal según sea necesario
];

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-24">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#38761D] mb-12">Personal Docente y Administrativo</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#eafbe7] rounded-lg shadow">
            <thead className="bg-[#38761D]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Nombre</th>
                <th className="py-3 px-4 text-left text-white">Cargo</th>
                <th className="py-3 px-4 text-left text-white">Área</th>
              </tr>
            </thead>
            <tbody>
              {personal.map((persona, idx) => (
                <tr key={idx} className="border-t border-[#38761D] hover:bg-[#d4f5c7]">
                  <td className="py-2 px-4">{persona.nombre}</td>
                  <td className="py-2 px-4">{persona.cargo}</td>
                  <td className="py-2 px-4">{persona.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
}