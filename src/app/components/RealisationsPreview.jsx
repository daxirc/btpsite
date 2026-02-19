// 'use client';

// import Link from 'next/link';

// const categories = [
//   {
//     title: 'Rénovation intérieur',
//     slug: 'renovation-interieur',
//     images: [
//       '/assets/escalier .jpeg',
//       '/assets/renov2.jpg',
//       '/assets/renov3.jpg',
//       '/assets/renov4.jpg',
//       '/assets/renov5.jpg',
//       '/assets/renov6.jpg',
//     ],
//   },
//   {
//     title: 'Isolation intérieur',
//     slug: 'isolation-interieur',
//     images: [
//       '/assets/Isolatin exterieur 1.jpg',
//       '/assets/iso_in2.jpg',
//       '/assets/iso_in3.jpg',
//       '/assets/iso_in4.jpg',
//     ],
//   },
//   {
//     title: 'Isolation extérieur',
//     slug: 'isolation-exterieur',
//     images: [
//       '/assets/escalier .jpeg',
//       '/assets/isolation int.jpeg',
//       '/assets/iso_out3.jpg',
//       '/assets/iso_out4.jpg',
//     ],
//   },
// ];

// export default function RealisationsPreview() {
//   return (
//     <section id="realisations" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//         Nos réalisations
//       </h2>
//       <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
//         Découvrez nos projets réalisés avec sérieux, précision et exigence.
//       </p>

//       <div className="text-black grid md:grid-cols-3 gap-8">
//         {categories.map((category) => (
//           <div
//             key={category.slug}
//             className="
//               group bg-white rounded-2xl overflow-hidden
//               shadow-md hover:shadow-2xl
//               transition-all duration-500
//             "
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden h-64">
//               <img
//                 src={category.images[0]}
//                 alt={category.title}
//                 className="
//                   w-full h-full object-cover
//                   transform group-hover:scale-110
//                   transition-transform duration-700
//                 "
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-lg font-semibold mb-4">
//                 {category.title}
//               </h3>

//               <Link
//                 href={`/realisations/${category.slug}`}
//                 className="
//                   inline-block px-6 py-2.5
//                   rounded-full bg-blue-600 text-white
//                   font-semibold text-sm
//                   transition-all duration-300
//                   hover:bg-blue-700 hover:scale-105
//                 "
//               >
//                 Voir plus
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';

const categories = [
  {
    title: 'Rénovation intérieur',
    slug: 'renovation-interieur',
    images: [
      '/assets/RENOVATION INTERIEUR/RENOVATION INTERIEUR/1st image.jpeg',
      
    ],
  },
  {
    title: 'Isolation intérieur',
    slug: 'isolation-interieur',
    images: [
      '/assets/ISOLATION INTERIEUR/ISOLATION INTERIEUR/1st image.jpeg',
     
    ],
  },
  {
    title: 'Isolation extérieur',
    slug: 'isolation-exterieur',
    images: [
      '/assets/ISOLATION EXTERIEUR/ISOLATION EXTERIEUR/1st image.jpeg',
         ],
  },

  // ✅ NEW CATEGORIES
  {
    title: 'Flocage',
    slug: 'flocage',
    images: [
      '/assets/FLOCAGE/FLOCAGE/1st image.jpeg',
   
    ],
  },
  {
    title: 'Calorifuge',
    slug: 'calorifuge',
    images: [
      '/assets/CALORIFUGE/CALORIFUGE/1st image.jpeg',

    ],
  },
  {
    title: 'Toiture',
    slug: 'toiture',
    images: [
      '/assets/TOITURE/TOITURE/1st image.jpeg',

    ],
  },
  {
    title: 'Soufflage',
    slug: 'soufflage',
    images: [
      '/assets/SOUFFLAGE/SOUFFLAGE/1st image.jpeg',

    ],
  },
];

export default function RealisationsPreview() {
  return (
    <section
      id="realisations"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Nos réalisations
      </h2>

      <p className="text-center text-white-600 mb-14 max-w-2xl mx-auto">
        Découvrez nos projets réalisés avec sérieux, précision et exigence.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="
              group bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-2xl
              transition-all duration-500
              flex flex-col
            "
          >
            {/* IMAGE PREVIEW */}
            <div className="relative overflow-hidden h-60">
              <img
                src={category.images[0]}
                alt={category.title}
                className="
                  w-full h-full object-cover
                  transform group-hover:scale-110
                  transition-transform duration-700
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* TITLE OVER IMAGE (on hover) */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                {category.title}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold mb-4">
                {category.title}
              </h3>

              <Link
                href={`/realisations/${category.slug}`}
                className="
                  inline-block px-3 py-2.5 w-1/3 mx-auto
                  rounded-full bg-blue-600 text-white
                  font-semibold text-sm
                  transition-all duration-300
                  hover:bg-blue-700 hover:scale-105
                "
              >
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
