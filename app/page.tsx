"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(14,165,233,0.25),transparent_30%)]" />

      <header className="relative z-10 border-b border-blue-500/20 bg-black/30 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold">
            💧 CDP<span className="text-blue-400">LEAKS</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/">Accueil</Link>
            <Link href="/profil">Profil</Link>
          </div>

          <a
            href="https://discord.gg/c8CRsfkze"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl border border-blue-400/70 bg-blue-500/10 text-blue-200 font-bold hover:bg-blue-500/20 transition"
          >
            Discord
          </a>
        </nav>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-xs text-blue-300/70 mb-4 tracking-wide">
          Fondée par TwixyLol
        </p>

        <div className="inline-flex mb-8 px-6 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200 font-bold">
          ⚡ Sécurisé • Rapide • Gratuit
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
          Bienvenue sur
          <span className="block bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            CDPLEAKS
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Accédez à une recherche simple, rapide et gratuite.
        </p>

        <a
          href="https://reacher.lol/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-16 py-7 rounded-3xl border border-blue-400/60 bg-blue-500/10 text-3xl font-extrabold shadow-[0_0_45px_rgba(59,130,246,0.55)] hover:bg-blue-500/20 hover:scale-105 transition"
        >
          <span className="inline-block animate-bounce">🔍</span>
          Recherche
        </a>
      </section>
    </main>
  );
}