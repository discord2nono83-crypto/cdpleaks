"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const popupAlreadyShown = sessionStorage.getItem("discord-popup-shown");

    if (!popupAlreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem("discord-popup-shown", "true");
    }

    async function checkUser() {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    }

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    localStorage.removeItem("logged-in");
    localStorage.removeItem("user-email");
    setIsLoggedIn(false);
    window.location.href = "/";
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050014] text-white">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
          <div className="w-full max-w-md rounded-3xl border border-purple-500/50 bg-[#0b0b20]/95 p-8 text-center shadow-[0_0_60px_rgba(168,85,247,0.35)]">
            <h2 className="text-3xl font-extrabold">
              SERVEUR OFFICIEL
              <br />
              <span className="text-purple-300">DE CDPLEAKS</span>
            </h2>

            <p className="mt-4 text-gray-300">
              Rejoignez le serveur officiel de CDPLEAKS pour les annonces,
              l’aide et les nouveautés.
            </p>

            <a
              href="https://discord.gg/c8CRsfkze"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 font-extrabold hover:bg-indigo-700"
            >
              Discord
            </a>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-bold text-gray-300 hover:bg-white/10"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(124,58,237,0.35),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.25),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.15),transparent_35%)]" />

      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold">
            👑 CDP<span className="text-purple-400">LEAKS</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/">Accueil</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/profil">Profil</Link>

            <Link
              href="/recherche"
              className="px-5 py-3 rounded-2xl border-2 border-yellow-400 text-yellow-300 font-extrabold shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:bg-yellow-400 hover:text-black transition"
            >
              👑 Recherche Premium
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/c8CRsfkze"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl border border-indigo-400/70 bg-indigo-500/10 text-indigo-200 font-bold hover:bg-indigo-500/20 transition"
            >
              Discord
            </a>

            {isLoggedIn && (
              <button
                onClick={logout}
                className="px-5 py-3 rounded-2xl border border-red-500/40 text-red-300 font-bold hover:bg-red-500/10"
              >
                Déconnexion
              </button>
            )}
          </div>
        </nav>
      </header>
<p className="text-xs text-purple-300/70 mb-3 tracking-wide">
  Fondée par TwixyLol
</p>
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        <div className="inline-flex mb-8 px-6 py-2 rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 font-bold">
          ⚡ Sécurisé • Rapide • Premium
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
          Bienvenue sur
          <span className="block bg-gradient-to-r from-yellow-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            CDPLEAKS
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Accédez à des recherches exclusives, du contenu premium et des
          fonctionnalités réservées aux membres VIP.
        </p>

        <div className="flex justify-center gap-5 flex-wrap mb-10">
          <Link
            href="/tarifs"
            className="px-9 py-4 rounded-2xl border-2 border-yellow-400 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 transition"
          >
            👑 Voir les tarifs
          </Link>

          {isLoggedIn ? (
            <Link
              href="/profil"
              className="px-9 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-bold"
            >
              Mon profil
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-9 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-bold"
            >
              Se connecter / S'inscrire
            </Link>
          )}
        </div>

        <a
          href="https://reacher.lol/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-14 py-6 rounded-3xl border border-purple-400/60 bg-purple-500/10 text-3xl font-extrabold shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:bg-purple-500/20 hover:scale-105 transition"
        >
          🔍 Recherche Gratuite
        </a>
      </section>
    </main>
  );
}