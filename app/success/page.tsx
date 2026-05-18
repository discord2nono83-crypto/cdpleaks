"use client";

const plans = {
  vip: { name: "VIP", icon: "👑", duration: "3 jours", days: 3 },
  elite: { name: "ÉLITE", icon: "⚡", duration: "1 semaine", days: 7 },
  legendaire: { name: "LÉGENDAIRE", icon: "💎", duration: "1 mois", days: 30 },
  master: { name: "MASTER", icon: "🏆", duration: "Lifetime", days: 36500 },
};

export default function SuccessPage() {
  const params = new URLSearchParams(window.location.search);
  const planId = params.get("plan") || "vip";
  const plan = plans[planId as keyof typeof plans] || plans.vip;

  const today = new Date();
  const expireDate = new Date(today);
  expireDate.setDate(today.getDate() + plan.days);

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-purple-500/10 border border-purple-500/50 rounded-3xl p-10 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
        <div className="text-7xl mb-4">{plan.icon}</div>

        <h1 className="text-4xl font-extrabold text-purple-300">
          Paiement réussi
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Ton accès premium est maintenant activé.
        </p>

        <div className="mt-8 bg-black/30 border border-yellow-400/50 rounded-2xl p-6">
          <div className="text-5xl mb-3">{plan.icon}</div>

          <h2 className="text-2xl font-bold text-yellow-300">
            Badge {plan.name}
          </h2>

          <p className="text-gray-300 mt-2">
            Durée : <span className="text-white font-bold">{plan.duration}</span>
          </p>

          <p className="text-gray-300 mt-2">
            Expire le :{" "}
            <span className="text-white font-bold">
              {plan.name === "MASTER"
                ? "Jamais"
                : expireDate.toLocaleDateString("fr-FR")}
            </span>
          </p>
        </div>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-bold"
        >
          Retour à l&apos;accueil
        </button>
      </div>
    </main>
  );
}