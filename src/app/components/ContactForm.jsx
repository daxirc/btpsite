'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    typesTravaux: '',
    typeBien: '',
    typeClient: '',
    budget: '',
    dateDebut: '',
    lieu: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Votre demande a été envoyée avec succès!');
        setFormData({
          nom: '',
          telephone: '',
          email: '',
          typesTravaux: '',
          typeBien: '',
          typeClient: '',
          budget: '',
          dateDebut: '',
          lieu: '',
          description: '',
        });
      } else {
        setMessage('✗ Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('✗ Erreur de connexion. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24 text-black " id="devis">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

        {/* LEFT INFO */}
        <div className="space-y-8 ">
          <br/><h3 className="text-xl font-semibold">
            Vous avez un projet ?
          </h3>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <a href="tel:+33698246065" className="font-medium hover:text-blue-600 transition">06 98 24 60 65</a>
            </div>
            <div className="border-b border-gray-300"></div>

            <div className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <a href="mailto:btpsolution.pro@gmail.com" className="hover:text-blue-600 transition">btpsolution.pro@gmail.com</a>
            </div>
            <div className="border-b border-gray-300"></div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <span>
                Île-de-France · Hauts-de-France<br />
                France selon projet
              </span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Devis gratuit sous 48h 
            </h2>
            <p className="text-gray-600 text-sm">
              Décrivez votre projet, nous vous recontactons rapidement avec une solution adaptée.
            </p>
          </div>

          {/* Form Fields */}
          <form className="grid md:grid-cols-3 gap-5 text-gray-800" onSubmit={handleSubmit}>

            <Input label="Nom" placeholder="Votre nom" name="nom" value={formData.nom} onChange={handleChange} />
            <Input label="Téléphone" placeholder="Votre téléphone" name="telephone" value={formData.telephone} onChange={handleChange} />
            <Input label="Email" placeholder="Votre email" name="email" type="email" value={formData.email} onChange={handleChange} />

            <Select label="Type de travaux" name="typesTravaux" value={formData.typesTravaux} onChange={handleChange} />
            <Select label="Type de bien" name="typeBien" value={formData.typeBien} onChange={handleChange} />
            <Select label="Type de client" name="typeClient" value={formData.typeClient} onChange={handleChange} />

            <Select label="Budget estimé" name="budget" value={formData.budget} onChange={handleChange} />
            <Input label="Date de début souhaitée" placeholder="jj/mm/aaaa" name="dateDebut" value={formData.dateDebut} onChange={handleChange} />
            <Input label="Lieu du projet" placeholder="Ex: Paris, Lyon..." name="lieu" value={formData.lieu} onChange={handleChange} />

            <div className="md:col-span-3">
              <label className="text-sm font-medium text-gray-700">
                Description du projet (optionnel)
              </label>
              <textarea
                placeholder="Décrivez brièvement votre projet..."
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 w-full min-h-[120px] rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            {message && (
              <div className="md:col-span-3 text-center">
                <p className={`text-sm font-medium ${message.startsWith('✓') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              </div>
            )}

            {/* Button */}
            <div className="md:col-span-3 text-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Envoi en cours...' : 'Obtenir une estimation →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Reusable Components */
function Input({ label, placeholder, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full text-gray-800 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}

function Select({ label, name, value, onChange }) {
  const options = {
    typesTravaux: ['Calorifuge', 'Flocage', 'Isolation Extérieure', 'Isolation Intérieure', 'Rénovation Intérieure', 'Soufflage', 'Toiture'],
    typeBien: ['Maison', 'Appartement', 'Bâtiment Commercial', 'Bâtiment Industriel'],
    typeClient: ['Particulier', 'Professionnel', 'Syndic'],
    budget: ['< 5 000€', '5 000€ - 15 000€', '15 000€ - 30 000€', '30 000€ - 50 000€', '> 50 000€'],
  };

  const optionsList = options[name] || [];

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">Sélectionner...</option>
        {optionsList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
