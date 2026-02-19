// components/Qualifications.jsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion"; // for smooth animations

const certifications = [
  {
    name: "RGE Reconnu Garant Environnement",
    logo: "/assets/Logo-RGE.png", 
    alt: "RGE Logo",
  },
  {
    name: "Qualibat",
    logo: "/assets/qualibat.png",
    alt: "Qualibat Logo",
  },
  {
    name: "RGE QualiPac",
    logo: "/assets/qualipac.png",
    alt: "RGE QualiPac Logo",
  },
];

export default function Qualifications() {
  return (
    <section className="py-16 bg-white text-center  text-black">
      <h2 className="text-3xl font-bold mb-4">NOS QUALIFICATIONS</h2>
      <p className="text-gray-600 mb-12">
        Nous plaçons la qualité et le professionnalisme au cœur de chacun de nos projets.
        <br />
        C’est pourquoi nous disposons de certifications reconnus, pour des travaux fiables, conformes aux normes et durables.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-0">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-64"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Image
              src={cert.logo}
              alt={cert.alt}
              width={250}
              height={250}
              className="mx-auto mb-4"
            />
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
