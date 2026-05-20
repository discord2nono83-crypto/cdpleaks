"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function DiscordIcon() {
  return (
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
  );
}

function DropLogo() {
  return (
    <div className="relative h-20 w-20 animate-float">
      <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-12 w-9 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full rounded-t-[70%] border-2 border-white bg-black shadow-[0_0_25px_rgba(255,255,255,0.75)]" />
      <div className="absolute bottom-3 left-1/2 h-3 w-12 -translate-x-1/2 rounded-full border border-white/40 blur-[1px]" />
    </div>
  );
}

export default function HomePage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function move(e: MouseEvent) {
      setMouse({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white cursor-none">
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.08);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .water-lines {
          background-image:
            radial-gradient(circle at 20% 25%, rgba(255,255,255,0.18), transparent 24%),
            radial-gradient(circle at 85% 45%, rgba(255,255,255,0.12), transparent 28%),
            linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
        }
      `}</style>

      <div
        className="pointer-events-none fixed z-[9999] h-9 w-7 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full rounded-t-[70%] border-2 border-white bg-black shadow-[0_0_35px_rgba(255,255,255,0.9)]"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div
        className="pointer-events-none fixed z-[9998] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(255,255,255,0.22),transparent_20%),radial-gradient(circle_at_90%_50%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_75%_95%,rgba(255,255,255,0.14),transparent_20%)]" />
      <div className="water-lines absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.95))]" />

      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center gap-4">
            <DropLogo />
            <span className="text-2xl font-extrabold tracking-wide">
              CDP<span className="text-white/70">LEAKS</span>
            </span>
          </Link>

          <div className="flex items-center gap-10 text-lg font-medium text-white/90">
            <Link href="/" className="hover:text-white/60 transition">
              Accueil
            </Link>
            <Link href="/profil" className="hover:text-white/60 transition">
              Profil
            </Link>
          </div>

          <a
            href="https://discord.gg/c8CRsfkze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/70 bg-white/5 px-6 py-4 font-extrabold text-white shadow-[0_0_30px_rgba(255,255,255,0.15)] transition hover:bg-white hover:text-black"
          >
            <DiscordIcon />
            Discord
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
        <p className="mb-5 text-sm tracking-wide text-white/60">
          Fondée par TwixyLol
        </p>

        <div className="mb-12 inline-flex rounded-full border border-white/40 bg-white/5 px-7 py-3 text-lg font-extrabold text-white shadow-[0_0_25px_rgba(255,255,255,0.12)]">
          ⚡ Sécurisé • Rapide • Gratuit
        </div>

        <h1 className="mb-8 text-6xl font-extrabold leading-tight tracking-tight md:text-8xl">
          Bienvenue sur
          <span className="block text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
            CDPLEAKS
          </span>
        </h1>

        <p className="mb-14 max-w-3xl text-xl text-white/75">
          Accédez à une recherche simple, rapide et gratuite.
        </p>

        <a
          href="https://reacher.lol/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-5 rounded-3xl border border-white/70 bg-white/5 px-20 py-8 text-4xl font-extrabold text-white shadow-[0_0_50px_rgba(255,255,255,0.22)] transition hover:scale-105 hover:bg-white hover:text-black"
        >
          <span className="inline-block transition group-hover:rotate-12 group-hover:scale-125">
            🔍
          </span>
          Recherche
        </a>
      </section>
    </main>
  );
}