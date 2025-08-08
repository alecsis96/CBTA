import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Carrusel from "@/components/Carrusel";
import Oferta from "@/components/Oferta";
import Contacto from "@/components/Contacto";
import Noticias from "@/components/Noticias";
import Personal from "@/components/Personal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ecf2f5ee] text-white px-6 py-12 font-sans">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Noticias />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >

        <Oferta />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Contacto />
      </motion.div>
      <Footer />
    </main>
  );
}
