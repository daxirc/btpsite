'use client';

const services = [
  {
    title: 'Isolation par soufflage',
    desc: 'Isolation rapide des combles pour limiter les pertes de chaleur et améliorer le confort thermique.',
    points: [
      'Combles perdus',
      'Traitement des ponts thermiques',
      'Préconisations selon support',
    ],
    image: '/assets/isolation_soufflage.png',
  },
  {
    title: 'Calorifuge',
    desc: 'Isolation des réseaux pour réduire les déperditions énergétiques.',
    points: ['Pose soignée', 'Protection durable', 'Gain énergétique'],
    image: '/assets/insulating.png',
  },
  {
    title: 'Flocage',
    desc: 'Protection passive thermique et feu selon la réglementation.',
    points: [
      'Solutions adaptées',
      'Respect des contraintes chantier',
      'Finition uniforme',
    ],
    image: '/assets/flocage.png',
  },
  {
    title: 'Plancher bas',
    desc: 'Isolation du plancher bas pour un meilleur confort thermique.',
    points: [
      'Sous-face de plancher',
      'Traitement zones sensibles',
      'Conseils matériaux',
    ],
    image: '/assets/floor_insulation.png',
  },
  {
    title: 'Isolation intérieure & extérieure (ITI / ITE)',
    desc: 'Optimisation thermique et acoustique globale du bâtiment.',
    points: [
      'Étude des murs & façades',
      'Finitions propres',
      'Solutions durables',
    ],
    image: '/assets/isolationimage.png',
  },
  {
    title: "Travaux d'intérieur",
    desc: 'Rénovation complète avec coordination de tous les corps de métier.',
    points: [
      'Peinture',
      'Électricité & plomberie',
      'Carrelage, escaliers, fenêtres',
    ],
    image: '/assets/interior.png',
  },
  {
    title: 'Pompe à chaleur (PAC)',
    desc: 'Installation et mise en service air/air et air/eau.',
    points: [
      'Étude besoins',
      'Optimisation hiver/été',
      'Explication d’usage',
    ],
    image: '/assets/heat_pump.png',
  },
  {
    title: 'Toiture',
    desc: 'Isolation et rénovation de toiture pour améliorer la performance énergétique.',
    points: [
      'Isolation toiture & combles',
      'Étanchéité',
      'Rénovation globale',
    ],
    image: '/assets/Toiture3.jpg',
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className=" text-black text-3xl md:text-4xl font-bold mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes de rénovation, d’isolation et de performance énergétique
            pour les maisons, appartements, commerces et bâtiments professionnels.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-70"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-200 mb-4">
                  {service.desc}
                </p>

                <ul className="text-sm space-y-1 ">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
