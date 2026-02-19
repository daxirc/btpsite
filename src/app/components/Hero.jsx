'use client';

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen
        flex items-center justify-center
        text-center
        bg-cover bg-center
      "
      style={{ backgroundImage: "url('/assets/maison.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 animate-fadeIn">
        <h1
          className="
            text-4xl sm:text-4xl lg:text-6xl
            font-bold
            leading-tight
            text-white
            mb-4
          "
        >
          Transformez votre logement grâce à l'isolation et à la rénovation énergétique
        </h1>

        <p
          className="
            text-base sm:text-xl
            text-gray-200
            mb-14
            mt-14
          "
        >
          Des solutions complètes de rénovation, d’isolation et de performance<br/>
          énergétique pour tous vos projets de travaux
        </p>

        <a
          href="#devis"
          className="
            inline-block
            bg-blue-600 text-white
            px-8 py-3
            rounded-full
            font-semibold
            transition-all duration-300
            hover:bg-blue-700
            hover:scale-105
            shadow-lg
          "
        >
          Demander un devis gratuit
        </a>
      </div>
    </section>
  );
}
