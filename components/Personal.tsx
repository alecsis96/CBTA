import React from "react";

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
  // Agrega más personal según sea necesario
];

export default function Personal() {
  return (
    <section id="personal" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#38761D] mb-12">Personal Docente y Administrativo</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-[#38761D]">Nombre</th>
              <th className="py-3 px-4 text-left text-[#38761D]">Cargo</th>
              <th className="py-3 px-4 text-left text-[#38761D]">Área</th>
            </tr>
          </thead>
          <tbody>
            {personal.map((persona, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{persona.nombre}</td>
                <td className="py-2 px-4">{persona.cargo}</td>
                <td className="py-2 px-4">{persona.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}