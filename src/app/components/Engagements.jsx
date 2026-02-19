'use client';

import Image from 'next/image';

export default function Engagements() {
  const items = [
    {
      image: '/assets/image 1.png',
      title: ' Qualité',
      desc: ' Finitions propres, travail rigoureux.',
    },
    {
      image: '/assets/image 2.png',
      title: 'Normes & sécurité',
      desc:  'Chantiers conformes, sécurisés.',
    },
    {
      image: '/assets/image 3.png',
      title: 'Transparence & accompagnement',
      desc: ' Devis clair, suivi simple.',
    },
    {
      image: '/assets/image 4.png',
      title: 'Performance & économies',
      desc: 'Confort + économies d’énergie.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-12">
          Nos Engagements
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                border border-gray-200
                rounded-2xl
                p-6
                text-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div
                className="
                  w-14 h-14
                  mx-auto mb-4
                  flex items-center justify-center
                  rounded-full
                  bg-blue-50
                  transition-all duration-300
                  group-hover:bg-blue-600
                  overflow-hidden
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={26}
                  height={26}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
