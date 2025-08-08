// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Inicio", link: "/" },
 
  { label: "Admisiones", link: "/admisiones" },
  //{ label: "Programas y Becas", link: "/becas" },
  {
    label: "Comunidad",
    items: ["Estudiantes", "Personal", "Egresados"],
  },
  { label: "Nosotros", link: "/nosotros" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121F3D] shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-cbta44.png" alt="Logo" className="w-14 h-auto" />
          <span className="ml-2 text-lg font-semibold text-white">
            Centro de Bachillerato Tecnológico #44
          </span>
        </div>
        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-6 font-medium relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-white hover:text-[#FF5F2E] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white cursor-pointer hover:text-[#FF5F2E] transition-colors">
                  {item.label}
                </span>
              )}
              {item.items && activeMenu === index && (
                <ul className="absolute top-full bg-white text-black rounded shadow-lg w-48 py-2 z-50">
                  {item.items.map((subItem, subIdx) => (
                    <li key={subIdx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {subItem === "Personal" ? (
                        <Link href="/personal">
                          <span>{subItem}</span>
                        </Link>
                      ) : (
                        <span>{subItem}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-[#121F3D] px-4 pb-4">
          <ul className="flex flex-col space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="block text-white py-2 px-2 rounded hover:bg-[#FF5F2E] hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left block text-white py-2 px-2 rounded focus:outline-none"
                      onClick={() =>
                        setMobileSubmenu(mobileSubmenu === index ? null : index)
                      }
                    >
                      {item.label}
                      <span className="float-right">{mobileSubmenu === index ? "▲" : "▼"}</span>
                    </button>
                    {mobileSubmenu === index && (
                      <ul className="pl-4">
                        {item.items?.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            {subItem === "Personal" ? (
                              <Link
                                href="/personal"
                                className="block text-white py-1 px-2 rounded hover:bg-[#FF5F2E] hover:text-white transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {subItem}
                              </Link>
                            ) : (
                              <span className="block text-white py-1 px-2">{subItem}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="h-1 bg-[#FF5F2E] w-full" />
    </nav>
  );
}


