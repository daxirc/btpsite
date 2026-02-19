// components/EnergyRenovationSection.jsx
import Image from "next/image";
import React from "react";

const EnergyRenovationSection = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-30 py-8 sm:py-12 space-y-8 sm:space-y-12 bg-white">
      {/* DPE Improvement Section */}
      <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6 lg:gap-8">
        {/* Image / DPE Cards */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          
    
            <img  src="/assets/DPE.png" alt="DPE G" width={1000} height={500} className="w-full h-full object-cover" />
            
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-3 sm:space-y-4 text-gray-700 leading-relaxed ">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Amélioration du DPE et valorisation du logement
          </h2>
          <p className="text-sm sm:text-base">
            Les travaux d'isolation et de rénovation énergétique permettent
            d'améliorer sensiblement le <strong>Diagnostic de Performance
            Énergétique (DPE)</strong> d'un logement.
          </p>
          <p className="text-sm sm:text-base">
            Un bien classé G, après des travaux d'isolation extérieure
            combinés à d'autres améliorations énergétiques, peut atteindre une
            meilleure classe énergétique, rendant le logement :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Plus confortable</li>
            <li>Moins énergivore</li>
            <li>Plus attractif à la revente</li>
            <li>Mieux valorisé sur le marché immobilier</li>
          </ul>
          <p className="text-sm sm:text-base">
            Une bonne performance énergétique est aujourd'hui un critère clé
            pour les acheteurs et les investisseurs.
          </p>
        </div>
      </div>

      {/* Financial Aid Section */}
      <div className="bg-gray-100 p-4 sm:p-6 rounded-lg space-y-4 text-black w-full sm:w-5/6 lg:w-3/4 mx-auto">
        <h3 className="text-lg sm:text-xl font-bold">
          Aides financières à la rénovation énergétique
        </h3>
        <p className="text-sm sm:text-base">
          Selon la nature des travaux et la situation du logement, il est
          possible de bénéficier de certaines aides financières à la rénovation
          énergétique, notamment dans le cadre d'une rénovation globale ou
          d'ampleur.
        </p>
        <p className="font-semibold text-sm sm:text-base">👉 Pour être éligible à ces aides :</p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>Le demandeur doit être propriétaire du logement</li>
          <li>Le logement doit respecter les critères réglementaires en vigueur</li>
          <li>Les travaux doivent viser une amélioration significative de la performance énergétique</li>
        </ul>
        <p className="text-sm sm:text-base">
          Ces dispositifs sont encadrés par l'État et soumis à des conditions
          précises (DPE, type de logement, nature des travaux, etc.).
          </p>
          <p className="font-semibold text-sm sm:text-base">🔗 Consulter les réglementations officielles et dispositifs en vigueur :</p>
       
        <div className="flex flex-col sm:flex-row sm:gap-4 space-y-3 sm:space-y-0">
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/N19808"
            className="text-blue-600 hover:text-blue-800 no-underline text-sm sm:text-base"
          >
           👉 https://www.service-public.fr/particuliers/vosdroits/N19808
          </a>
          <a
            href="https://france-renov.gouv.fr"
            className="text-blue-600 hover:text-blue-800 no-underline text-sm sm:text-base"
          >
           👉 https://france-renov.gouv.fr
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnergyRenovationSection;
