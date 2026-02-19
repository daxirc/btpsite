'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white pt-10">

      {/* TOP ROW → LOGO + SOCIAL */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pb-6">

        {/* LOGO */}
        <Image
          src="/assets/logo-w.png"
          alt="BTP Solution"
          width={120}
          height={60}
        />

        {/* SOCIAL */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-sm text-gray-300 mr-2">NOUS SUIVRE</span>

          <Link href="https://www.facebook.com/profile.php?id=61575120124518" target="_blank">
            <Image src="/assets/facebook.jpeg" alt="Facebook" width={34} height={34} />
          </Link>

          <Link href="https://www.tiktok.com/@btp.energie?is_from_webapp=1&sender_device=pc" target="_blank">
            <Image src="/assets/tiktokk.jpeg" alt="TikTok" width={40} height={40} />
          </Link>

          <Link href="https://www.linkedin.com/in/aasher-mirza-822a70202" target="_blank">
            <Image src="/assets/linkedin.jpeg" alt="LinkedIn" width={34} height={34} />
          </Link>

          <Link href="https://www.instagram.com/btpsolutionenergetique?igsh=ZGwycXF2OGxobjln" target="_blank">
            <Image src="/assets/Instagram.jpeg" alt="Instagram" width={40} height={40} />
          </Link>
        </div>
      </div>

      {/* DIVIDER AFTER LOGO/SOCIAL */}
      <div className="border-t border-gray-600"></div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-10">

        {/* LEFT TEXT */}
        <div className="text-sm text-gray-300 leading-relaxed  align-middle">
         Entreprise de travaux généraux <span className="text-green-400 font-semibold">BTP</span> et de rénovation énergétique en Île-de-France,
          <br/> Hauts-de-France et partout en France selon les projets.
          <br/>Matériaux conformes aux normes, isolants certifiés ACERMI.
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col gap-2 text-sm text-gray-300 md:items-center">
          <Link href="#apropos" className="hover:text-white">A propos</Link>
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#realisations" className="hover:text-white">Réalisations</Link>
          <Link href="#faq" className="hover:text-white">FAQ</Link>
          <Link href="#devis" className="hover:text-white">Devis</Link>
        </div>

        {/* RIGHT LEGAL */}
        <div className="flex flex-col gap-2 text-sm text-gray-300 md:items-center">
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions Légales
          </Link>
          <Link href="/politique-confidentialite" className="hover:text-white">
            Politique de Confidentialité
          </Link>
        </div>
      </div>

      {/* WHITE BOTTOM BAR */}
      <div className="bg-white text-center text-sm text-gray-700 py-3">
        © 2026{' '}
        <span className="text-green-600 font-semibold">
          BTP Solution Énergétique
        </span>{' '}
        . Tous droits réservés
      </div>
    </footer>
  );
}
