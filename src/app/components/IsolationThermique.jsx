'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    text: 'Réduction durable des pertes de chaleur',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
      </svg>
    ),
  },
  {
    text: 'Amélioration du confort été comme hiver',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M5 12h14" />
      </svg>
    ),
  },
  {
    text: 'Diminution des factures d’énergie',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1v22M17 5H9a3 3 0 000 6h6a3 3 0 010 6H6" />
      </svg>
    ),
  },
  {
    text: 'Valorisation du bien immobilier',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    text: 'Amélioration du classement DPE',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z" />
        <path d="M7 17V7M12 17V10M17 17v-4" />
      </svg>
    ),
  },
  {
    text: 'Compatible avec une rénovation globale',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function IsolationThermique() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-3xl font-bold text-black mb-3">
            Les avantages de l&apos;isolation thermique (intérieure et extérieure)
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            L&apos;isolation thermique, qu&apos;elle soit par l&apos;extérieur (ITE) ou par
            l&apos;intérieur (ITI), permet d&apos;améliorer significativement le confort
            et la performance énergétique du logement.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-800">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before / After Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            
            <Image
              src="/assets/isolation de maison.jpeg"
              alt="Avant isolation"
              width={700}
              height={450}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Après
            </span> */}
            <Image
              src="/assets/isolation maison.jpeg"
              alt="Après isolation"
              width={700}
              height={450}
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 max-w-4xl mx-auto"
        >
          L&apos;isolation extérieure est particulièrement efficace pour traiter
          les ponts thermiques, tandis que l&apos;isolation intérieure constitue
          une solution adaptée dans certains cas techniques ou budgétaires.
        </motion.p>

      </div>
    </section>
  );
}
