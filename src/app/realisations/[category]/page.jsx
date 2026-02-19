import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { category } = await params;

  const titles = {
    'renovation-interieur': 'Rénovation intérieur',
    'isolation-interieur': 'Isolation intérieur',
    'isolation-exterieur': 'Isolation extérieur',
    'flocage': 'Flocage',
    'calorifuge': 'Calorifuge',
    'toiture': 'Toiture',
    'soufflage': 'Soufflage',
  };

  return {
    title: titles[category] || 'Nos réalisations',
  };
}

export function generateStaticParams() {
  return [
    { category: 'renovation-interieur' },
    { category: 'isolation-interieur' },
    { category: 'isolation-exterieur' },
    { category: 'flocage' },
    { category: 'calorifuge' },
    { category: 'toiture' },
    { category: 'soufflage' },
  ];
}

const galleries = {
  'renovation-interieur': {
    title: 'Rénovation Intérieur',
    images: [
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/2.png',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/3.png',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/4.jpeg',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/5.png',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/6.jpeg',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/7.png',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/8.png',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/9.jpeg',
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/10.jpeg',
    ],
  },
  'isolation-interieur': {
    title: 'Isolation Intérieur',
    images: [
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/2.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/3.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/4.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/5.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/6.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/7.jpeg',
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/8.jpeg',
    ],
  },
  'isolation-exterieur': {
    title: 'Isolation Extérieur',
    images: [
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/2.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/3.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/4.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/5.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/6.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/7.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/8.jpg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/9.jpeg',
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/10.jpeg',
    ],
  },
  'flocage': {
    title: 'Flocage',
    images: [
      '/assets/FLOCAGE/FLOCAGE/1st image.jpeg',
      '/assets/FLOCAGE/FLOCAGE/2.jpg',
      '/assets/FLOCAGE/FLOCAGE/3.jpeg',
      '/assets/FLOCAGE/FLOCAGE/4.jpg',
      '/assets/FLOCAGE/FLOCAGE/5.jpg',
    ],
  },
  'calorifuge': {
    title: 'Calorifuge',
    images: [
      '/assets/CALORIFUGE/CALORIFUGE/1st image.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/2.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/3.jpg',
      '/assets/CALORIFUGE/CALORIFUGE/4.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/5.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/6.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/7.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/8.jpeg',
      '/assets/CALORIFUGE/CALORIFUGE/9.jpeg',
  
    ],
  },

  'toiture': {
    title: 'Toiture',
    images: [   
      '/assets/TOITURE/TOITURE/1st image.jpeg',
      '/assets/TOITURE/TOITURE/2.jpeg',
      '/assets/TOITURE/TOITURE/3.jpeg',
      '/assets/TOITURE/TOITURE/4.jpeg',
      '/assets/TOITURE/TOITURE/5.jpeg',
      '/assets/TOITURE/TOITURE/6.jpeg',
      '/assets/TOITURE/TOITURE/7.jpg',
    ],
 },
  'soufflage': {
    title: 'Soufflage',
    images: [
      '/assets/SOUFFLAGE/SOUFFLAGE/1st image.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/2.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/3.jpg',
      '/assets/SOUFFLAGE/SOUFFLAGE/4.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/5.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/6.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/7.jpeg',
      '/assets/SOUFFLAGE/SOUFFLAGE/8.jpeg',
    ],
  },
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const data = galleries[category];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Gallery not found</p>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center text-black ">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {data.title}
          </h1>
          <p className="text-gray-600">
            Découvrez nos réalisations récentes dans cette catégorie.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={img}
                alt={data.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-16">
          <Link
            href="/#realisations"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            ← Retour aux réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
