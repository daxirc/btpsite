'use client';

import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Analyse du projet",
    description: "Présentation de votre projet (type de logement ou bâtiment, surface, contraintes, photos).",
  },
  {
    id: 2,
    title: "Visite & diagnostic",
    description: "Visite sur site si nécessaire, validation technique et métrés.",
  },
  {
    id: 3,
    title: "Devis détaillé",
    description: "Devis clair : prestations, matériaux, délais et conditions d'intervention.",
  },
  {
    id: 4,
    title: "Réalisation & suivi",
    description: "Tous les travaux sont réalisés en conformité avec les normes en vigueur (Chantier propre, finitions de qualité, suivi continu et communication).",
  },
];

export default function RenovationProcess() {
  return (
    <section className="py-16 bg-white  text-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comment fonctionne votre projet de rénovation?
        </h2>
        <p className="text-gray-600 mb-12">
          Accompagnement clair, structuré et efficace pour vos projets de rénovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <button href="#devis" className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Demander un devis gratuit
        </button>
      </div>
    </section>
  );
}
