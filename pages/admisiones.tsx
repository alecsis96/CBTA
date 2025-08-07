import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Admisiones() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    curp: "",
    email: "",
    telefono: "",
    secundaria: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí podrías enviar los datos a un backend o servicio externo
  };

  return (
    <main className="min-h-screen bg-[#ecf2f5ee] text-gray-900 px-6 py-24 font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#38761D]">Proceso de Admisión</h1>
        <p className="text-lg leading-relaxed mb-6">
          El proceso de admisión está diseñado para seleccionar a los estudiantes más comprometidos con la formación técnica de calidad. Aquí encontrarás los pasos y requisitos necesarios.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2 mb-8">
          <li>Acta de nacimiento (copia y original).</li>
          <li>CURP actualizado.</li>
          <li>Certificado de secundaria.</li>
          <li>4 fotografías tamaño infantil.</li>
          <li>Llenar el formulario de admisión en línea.</li>
        </ul>
        <div className="text-center mb-10">
          <button
            className="bg-[#38761D] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#285214] transition"
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? "Cerrar formulario" : "Llenar formulario de admisión"}
          </button>
        </div>
        {mostrarFormulario && (
          <div className="bg-white rounded-lg shadow p-6 max-w-lg mx-auto mb-10">
            {enviado ? (
              <div className="text-center text-green-700 font-semibold">
                ¡Formulario enviado correctamente!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-1">Nombre(s)</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Apellido(s)</label>
                  <input
                    type="text"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">CURP</label>
                  <input
                    type="text"
                    name="curp"
                    value={form.curp}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Secundaria de procedencia</label>
                  <input
                    type="text"
                    name="secundaria"
                    value={form.secundaria}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#38761D] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#285214] transition w-full"
                >
                  Enviar solicitud
                </button>
              </form>
            )}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}