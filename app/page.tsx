"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function DropLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C12 2 5 10 5 15.5C5 19.642 8.358 23 12.5 23C16.642 23 20 19.642 20 15.5C20 10 12 2 12 2Z"
        fill="white"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M9 15C9.5 16.5 10.8 17.5 12.5 17.5"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CursorDrop() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 12,
        top: pos.y - 12,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.05s linear",
        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
      }}
    >
      <DropLogo className="w-6 h-6" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <CursorDrop />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1f2937_0%,#000_55%,#111_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-md bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="animate-bounce">
              <DropLogo className="w-8 h-8" />
            </div>
            <span className="text-3xl font-black tracking-tight">CDPLEAKS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#" className="hover:text-white transition">Accueil</a>
            <a href="#" className="hover:text-white transition">Profil</a>
            <a href="#support" className="hover:text-white transition">Support</a>
          </nav>

          <a
            href="https://discord.gg/tonserveur"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition shadow-lg"
          >
            <span>💬</span>
            <span>Discord</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-sm text-white/50 mb-4">Fondée par TwixyLoI</p>

        <div className="mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          ⚡ Sécurisé • Rapide • Gratuit
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
          Bienvenue sur
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            CDPLEAKS
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Accédez à une recherche simple, rapide et totalement gratuite.
        </p>

        <Link
          href="/search"
          className="group inline-flex items-center gap-4 px-12 py-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md text-3xl font-bold hover:bg-white/10 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
        >
          <span className="group-hover:animate-bounce">🔍</span>
}