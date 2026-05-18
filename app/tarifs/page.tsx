"use client";

import Link from "next/link";

const plans = [
  {
    id: "vip",
    icon: "👑",
    name: "VIP",
    duration: "3 JOURS",
    description: "VIP Discord + 3 jours de recherches sans limite",
    price: "1€",
    features: [
      "VIP sur le serveur Discord",
      "3 jours de recherches sans limite",
      "Accès aux sources",
      "Résultats instantanés",
      "Support prioritaire",
    ],
  },
  {
    id: "elite",
    icon: "⚡",
    name: "ÉLITE",
    duration: "1 SEMAINE",
    description: "VIP Discord + 1 semaine de recherches sans limite",
    price: "3€",
    features: [
      "VIP sur le serveur Discord",
      "1 semaine de recherches sans limite",
      "Accès aux sources",
      "Exports avancés",
      "Support prioritaire",
    ],
  },
  {
    id: "legendaire",
    icon: "💎",
    name: "LÉGENDAIRE",
    duration: "1 MOIS",
    description: "VIP Discord + 1 mois de recherches sans limite",
    price: "5€",
    popular: true,
    features: [
      "VIP sur le serveur Discord",
      "1 mois de recherches sans limite",
      "Accès aux sources",
      "Résultats instantanés",
      "Alertes & surveillance",
    ],
  },
  {
    id: "master",
    icon: "🏆",
    name: "MASTER",
    duration: "LIFETIME",
    description: "VIP Discord + recherches sans limite à vie",
    price: "25€",
    features: [
      "VIP sur le serveur Discord",
      "Recherches sans limite à vie",
      "Accès à toutes les sources",
      "Support prioritaire 24/7",
      "Fonctionnalités exclusives",
    ],
  },
];

export default function TarifsPage() {
  async function handleCheckout(plan: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création du paiement.");
      }
    } catch {
      alert("Erreur de connexion à Stripe.");
    }
  }

  return (
    <main className="min-h-screen bg-[#050014] text-white px-6 py-8">
      {/* Navigation */}
      <header className="max-w-7xl mx-auto mb-12">
        <nav className="flex items-center justify-between border border-white/10 bg-black/30 backdrop-blur-xl rounded-2xl px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold">
            👑 CDP<span className="text-purple-400">LEAKS</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-purple-300">
              Accueil
            </Link>

            <Link href="/tarifs" className="text-yellow-300 font-bold">
              Tarifs
            </Link>

            <Link href="/profil" className="hover:text-purple-300">
              Profil
            </Link>

            <Link
              href="/recherche"
              className="px-4 py-2 rounded-xl border-2 border-yellow-400 text-yellow-300 font-bold shadow-[0_0_20px_rgba(250,204,21,0.5)]"
            >
              👑 Recherche Premium
            </Link>
          </div>

          <a
            href="https://discord.gg/c8CRsfkze"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-400/70 bg-indigo-500/10 text-indigo-200 font-bold"
          >
            Discord
          </a>
        </nav>
      </header>

      {/* Titre */}
      <section className="text-center mb-16">
        <div className="text-6xl mb-4">👑</div>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          Choisissez votre{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            puissance
          </span>
        </h1>

        <p className="text-gray-300 mt-5 text-lg">
          Débloquez l’accès premium CDPLEAKS.
        </p>
      </section>

      {/* Cartes */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl p-7 border bg-black/30 backdrop-blur-xl ${
              plan.popular
                ? "border-yellow-400 shadow-[0_0_45px_rgba(250,204,21,0.45)]"
                : "border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-extrabold text-sm px-5 py-2 rounded-full">
                ⭐ LE PLUS POPULAIRE
              </div>
            )}

            <div className="text-6xl text-center -mt-14 mb-6">
              {plan.icon}
            </div>

            <h2
              className={`text-4xl font-extrabold text-center ${
                plan.popular ? "text-yellow-300" : "text-purple-300"
              }`}
            >
              {plan.name}
            </h2>

            <div className="flex justify-center mt-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-extrabold ${
                  plan.popular
                    ? "bg-yellow-400 text-black"
                    : "bg-purple-600 text-white"
                }`}
              >
                {plan.duration}
              </span>
            </div>

            <p className="text-gray-300 text-center mt-8 min-h-[70px]">
              {plan.description}
            </p>

            <div
              className={`text-6xl font-extrabold text-center my-8 ${
                plan.popular ? "text-yellow-300" : "text-purple-300"
              }`}
            >
              {plan.price}
            </div>

            <button
              onClick={() => handleCheckout(plan.id)}
              className={`w-full py-4 rounded-2xl font-extrabold ${
                plan.popular
                  ? "bg-yellow-400 text-black"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              }`}
            >
              Choisir {plan.name}
            </button>

            <ul className="mt-8 space-y-4 text-gray-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    className={
                      plan.popular ? "text-yellow-300" : "text-purple-300"
                    }
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Bas de page */}
      <section className="max-w-3xl mx-auto mt-14 border border-white/10 bg-white/5 rounded-3xl p-5 text-center text-gray-300">
        🛡️ Paiement sécurisé • Accès instantané • Support 24/7
      </section>
    </main>
  );
}