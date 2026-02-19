export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12">

        {/* Image Column */}
        <div className="relative h-full flex items-center">
          <div className="bg-white p-4 rounded-br-[45px] w-full h-full shadow-lg">
            <img
              src="/assets/nosmission.png"
              alt="Rénovation intérieure"
              className="w-full h-full object-cover rounded-br-[35px]"
            />
          </div>
        </div>


          {/* Text Column */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm flex flex-col justify-between h-full">
            <div className="space-y-4 text-black leading-relaxed text-[15px]">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-4" >
                A propos de nous
              </h2>
              <p>
                <strong>BTP Solution Énergétique</strong> est une entreprise spécialisée en
                travaux généraux BTP, <strong>rénovation globale, 
                isolation thermique et performance énergétique</strong>.
              
                Nous accompagnons particuliers et professionnels avec une approche claire :
                des solutions durables, un chantier maîtrisé et des finitions soignées.
              </p>

              <p>
                <strong>Notre objectif est simple: </strong>
                Améliorer le confort, réduire les pertes énergétiques et valoriser votre bien,
                tout en respectant les normes en vigueur et la qualité d’exécution.
              </p>

              <p>
                <strong>BTP Solution Énergétique</strong> intervient principalement en <strong>Île-de-France</strong> et dans les <strong>Hauts-de-France</strong> pour vos travaux de rénovation globale, 
                d’isolation thermique et de performance énergétique.<br/>
                Selon la nature et l’envergure des projets, nos équipes peuvent également se déplacer <strong>partout en France</strong> afin d’accompagner particuliers et professionnels dans leurs travaux.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="#realisations"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full
                font-medium hover:bg-blue-700 transition"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
