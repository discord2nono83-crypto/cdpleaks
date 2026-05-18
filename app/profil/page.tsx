"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setEmail(data.user.email || "");
      setLoading(false);
    }

    loadUser();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    localStorage.removeItem("logged-in");
    localStorage.removeItem("user-email");
    window.location.href = "/";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050014] text-white flex items-center justify-center">
        Chargement...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050014] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-purple-300 hover:text-white">
          ← Retour accueil
        </Link>

        <section className="mt-10 rounded-3xl border border-purple-500/40 bg-black/40 p-10 text-center">
          <div className="text-6xl mb-4">👤</div>

          <h1 className="text-5xl font-extrabold mb-4">
            Mon Profil
          </h1>

          <p className="text-gray-300 mb-8">
            Connecté avec :
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 mb-8">
            {email}
          </div>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-6 mb-8">
            <h2 className="text-2xl font-bold text-yellow-300">
              👑 Statut Premium
            </h2>

            <p className="text-gray-300 mt-2">
              Ton abonnement est lié à Supabase/Stripe.
            </p>
          </div>

          <button
            onClick={logout}
            className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 font-bold"
          >
            Déconnexion
          </button>
        </section>
      </div>
    </main>
  );
}