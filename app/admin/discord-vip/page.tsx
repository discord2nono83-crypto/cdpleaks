"use client";

import { useState } from "react";
import Link from "next/link";

export default function DiscordVipAdminPage() {
  const [discordId, setDiscordId] = useState("");
  const [loading, setLoading] = useState(false);

  async function addVipRole() {
    if (!discordId) {
      alert("Entre un ID Discord.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/add-discord-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ discordId }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert("Erreur : " + data.error);
      return;
    }

    alert("Rôle VIP ajouté avec succès !");
    setDiscordId("");
  }

  return (
    <main className="min-h-screen bg-[#050014] text-white px-6 py-10">
      <div className="max-w-xl mx-auto">
        <Link href="/admin" className="text-purple-300 hover:text-white">
          ← Retour admin
        </Link>

        <section className="mt-10 rounded-3xl border border-purple-500/40 bg-black/40 p-8">
          <h1 className="text-4xl font-extrabold text-yellow-300 mb-4">
            👑 Ajouter VIP Discord
          </h1>

          <p className="text-gray-300 mb-6">
            Entre l’ID Discord du membre pour lui donner le rôle VIP.
          </p>

          <input
            type="text"
            placeholder="ID Discord du membre"
            value={discordId}
            onChange={(e) => setDiscordId(e.target.value)}
            className="w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none mb-5"
          />

          <button
            onClick={addVipRole}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-yellow-400 text-black font-extrabold hover:bg-yellow-300 transition"
          >
            {loading ? "Ajout en cours..." : "Ajouter le rôle VIP"}
          </button>
        </section>
      </div>
    </main>
  );
}