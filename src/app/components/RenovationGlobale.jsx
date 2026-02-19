'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Counter Component */
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-xl font-semibold">+</span>
    </span>
  );
}

export default function RenovationGlobale() {
  return (
    <section className="bg-white py-8 sm:py-16 md:py-24" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-4xl md:text-4xl font-bold text-black mb-8 sm:mb-12">
          Rénovation Globale Intérieur
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 min-h-96 sm:min-h-[400px] flex flex-col justify-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Rénovation globale intérieure : confort, esthétique et valeur ajoutée
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Nous réalisons des projets de rénovation globale intérieure pour
              moderniser votre logement et améliorer votre confort au quotidien.
              Cette rénovation permet de repenser vos espaces (salon, cuisine,
              salle de bain, chambres), d’optimiser les volumes et de remettre à
              neuf les finitions : peinture, sols, plafonds, électricité,
              plomberie, cloisons et aménagements sur mesure.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              L’objectif est simple : obtenir un intérieur plus agréable, plus
              fonctionnel et plus durable, tout en valorisant votre bien. Une
              rénovation intérieure bien réalisée améliore aussi la qualité de
              vie et peut augmenter la valeur immobilière de votre logement.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-br-[60px] overflow-hidden shadow-lg min-h-64 sm:min-h-[400px]"
          >
            <Image
              src="/assets/Rénovation globale intérieur.jpeg"
              alt="Rénovation intérieure"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <a
            href="#devis"
            className="
              bg-blue-600 hover:bg-blue-700
              text-white text-sm sm:text-md font-medium
              px-6 sm:px-8 py-2 sm:py-3 rounded-full
              shadow-md hover:shadow-lg transition
            "
          >
            Demander un devis gratuit
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 rounded-br-[60px] rounded-tl-[60px] overflow-hidden relative">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/renovationchiffres.png')" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

          <div className="relative px-4 sm:px-6 py-10 sm:py-16 md:py-20">

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center text-white text-lg sm:text-xl md:text-2xl font-bold mb-10 sm:mb-14 max-w-4xl mx-auto px-4"
            >
              Pourquoi choisir BTP Solution Énergétique pour vos travaux de
              rénovation et d'amélioration de l’habitat ?
            </motion.h3>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">

              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl py-6 sm:py-8 shadow-lg"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={10} />
                </p>
                <p className="text-xs sm:text-sm text-white/80">ans d'expertise</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl py-6 sm:py-8 shadow-lg"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={250} />
                </p>
                <p className="text-xs sm:text-sm text-white/80">chantiers réalisés</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl py-6 sm:py-8 shadow-lg"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={1000} />
                </p>
                <p className="text-xs sm:text-sm text-white/80">clients accompagnés</p>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
