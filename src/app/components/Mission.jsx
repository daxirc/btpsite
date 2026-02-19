'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-24 relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-[url('/assets/nosmission.png')]
          bg-cover bg-center
          md:bg-[center_top]
          z-0
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Notre mission
          </h2>

          <p className="text-gray-700 text-base md:text-md mb-4 leading-relaxed">
            Chez <strong>BTP Solution Énergétique</strong>, notre mission est de 
            vous apporter une solution complète, fiable et adaptée à votre projet,
             du premier échange jusqu’à la livraison finale. 
             Nous mettons tout en œuvre pour garantir un chantier organisé, 
             propre et sécurisé, avec un accompagnement clair à chaque étape. 
             Notre priorité est de vous proposer des <strong>travaux efficaces et durables</strong>,
              qui améliorent réellement votre confort au quotidien, optimisent 
              votre logement ou bâtiment, et vous permettent d’investir en 
              toute confiance dans la qualité.

          </p>

          <a
            href="#devis"
            className="
              inline-block
              rounded-full
              bg-blue-600 text-white
              px-8 py-3 text-base font-semibold
              shadow-lg hover:shadow-xl
              transition transform hover:scale-105
            "
          >
            Demander un devis
          </a>
        </motion.div>


      </div>
    </section>
  );
}
