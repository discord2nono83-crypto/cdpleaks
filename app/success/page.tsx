"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [plan, setPlan] = useState("Premium");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPlan(params.get("plan") || "Premium");
  }, []);

  return (
    <main className="min-h-screen bg-[#050014] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-3xl border border-purple-500/50 bg-black/40 p-10 text-center shadow-[0_0_60px_rgba(168,85,247,0.35)]">
        <div className="text-7xl mb-6">⚡</div>

        <h1 className="text-5xl font-extrabold mb-4">
          Paiement réussi
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Ton accès premium est maintenant activé.
        </p>

        <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-6 mb-8">
          <div className="text-5xl mb-3">⚡</div>
          <h2 className="text-2xl font-extrabold text-yellow-300">
            Badge {plan.toUpperCase()}
          </h2>
          <p className="text-gray-300 mt-2">Durée : selon ton abonnement</p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 font-extrabold transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}