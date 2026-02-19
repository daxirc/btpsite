'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Intervenez-vous sans local / boutique ?',
    a: 'Oui. Nos équipes interviennent directement sur chantier, pour les particuliers et les professionnels, sur l\'ensemble de nos zones d\'intervention. Les devis et le suivi de projet se font à distance (téléphone / e-mail), avec des visites sur site lorsque cela est nécessaire.',
  },
  {
    q: 'En combien de temps peut-on obtenir un devis ?',
    a: 'Le devis est généralement établi sous 24 à 48 heures ouvrées, selon la nature et la complexité du projet. Pour les chantiers de grande surface ou les projets de rénovation globale, une visite sur site peut être nécessaire afin de garantir un chiffrage précis.',
  },
  {
    q: 'Faites-vous aussi la rénovation complète ?',
    a: 'Oui. Nous réalisons des projets de rénovation complète et de rénovation globale, en coordonnant plusieurs corps de métier : peinture, électricité, plomberie, carrelage, menuiseries (fenêtres, portes, Velux), ainsi que l’aménagement intérieur. Nous assurons un accompagnement global, de l’étude du projet jusqu’à la livraison du chantier.',
  },
  {
    q: 'Proposez-vous la rénovation énergétique et la rénovation globale ?',
    a: 'Oui. Nous accompagnons nos clients dans des projets de rénovation énergétique et de rénovation globale, incluant l’isolation intérieure et extérieure, l’amélioration du chauffage et l’optimisation de la performance énergétique du logement.',
  },
  {
    q: 'Est-il possible de bénéficier d’aides financières pour les travaux ?',
    a: 'Selon la nature du projet et la situation du logement, certains travaux peuvent être éligibles à des aides financières à la rénovation énergétique. L\'éligibilité dépend notamment du statut de propriétaire, du type de logement et des réglementations en vigueur. Pour plus d\'informations officielles : 👉 https://france-renov.gouv.fr'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24 text-black" id='faq'>
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            FAQ
          </h2>
          <p className="text-gray-600">
            Les questions les plus fréquentes avant de démarrer un chantier.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:bg-blue-50 transition"
                >
                  <span>{item.q}</span>

                  {/* Arrow */}
                  <span
                    className={`ml-4 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
