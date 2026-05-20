"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 relative">
      {/* Bouton Retour */}
      <Link
        href="/"
        className="absolute top-6 left-6 px-5 py-3 rounded-xl border border-white/10 bg-black/60 text-white hover:bg-white/10 transition"
      >
        ← Retour
      </Link>

      {/* Carte de connexion */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.06)]">
        {/* Titre */}
        <h1 className="text-6xl font-extrabold text-white text-center mb-8">
          Connexion
        </h1>

        {/* Formulaire */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-white text-black font-bold py-4 hover:bg-gray-200 transition shadow-lg"
          >
            Se connecter
          </button>
        </form>

        {/* Séparateur */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-4 text-gray-500 text-sm">OU</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google */}
        <button className="w-full rounded-2xl bg-zinc-900 border border-white/10 py-4 text-white font-semibold hover:bg-zinc-800 transition flex items-center justify-center gap-3">
          <span className="text-lg font-bold">G</span>
          Se connecter avec Google
        </button>

        {/* Discord */}
        <button className="w-full mt-4 rounded-2xl bg-zinc-900 border border-white/10 py-4 text-white font-semibold hover:bg-zinc-800 transition flex items-center justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 127.14 96.36"
            fill="currentColor"
            className="text-white"
          >
            <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.25 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.06a75.57 75.57 0 0 0 64.32 0c.87.72 1.76 1.4 2.67 2.06a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.24A105.25 105.25 0 0 0 126.6 80.22c2.64-27.29-4.51-51-18.9-72.15ZM42.45 65.69c-6.31 0-11.49-5.79-11.49-12.9s5.1-12.9 11.49-12.9c6.39 0 11.58 5.84 11.49 12.9 0 7.11-5.1 12.9-11.49 12.9Zm42.24 0c-6.31 0-11.49-5.79-11.49-12.9s5.1-12.9 11.49-12.9c6.39 0 11.58 5.84 11.49 12.9 0 7.11-5.1 12.9-11.49 12.9Z" />
          </svg>
          Se connecter avec Discord
        </button>

        {/* Inscription */}
        <p className="text-center text-gray-400 mt-6">
          Pas de compte ?{" "}
          <Link
            href="/register"
            className="text-white font-bold hover:underline"
          >
            S'inscrire
          </Link>
        </p>
      </div>
    </main>
  );
}