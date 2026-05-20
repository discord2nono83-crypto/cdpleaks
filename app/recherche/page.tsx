"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RecherchePremiumPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkPremium() {
      // Vérifie si l'utilisateur est connecté
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // Récupère le profil
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("is_premium")
        .eq("id", user.id)
        .single();

      if (error || !profile) {
        setMessage("Impossible de vérifier votre abonnement.");
        setLoading(false);
        return;
      }

      // Si l'utilisateur est premium → redirection vers oathnet
      if (profile.is_premium) {
        window.location.href = "https://discordapp.com/channels/1506328287624827171/1506335393782562877";
        return;
      }

      // Sinon → message d'erreur
      setMessage("❌ Tu n'es pas Premium.");
      setLoading(false);
    }

    checkPremium();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050014] text-white flex items-center justify-center">
        <p>Chargement...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050014] text-white flex items-center justify-center px-4">
      <div className="bg-[#12002a] border border-purple-600 rounded-2xl p-10 text-center shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Accès refusé</h1>
        <p className="text-red-400 text-lg mb-6">{message}</p>

        <button
          onClick={() => router.push("/tarifs")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition"
        >
          Voir les abonnements
        </button>
      </div>
    </main>
  );
}