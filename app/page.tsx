"use client";
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .water-lines {
          background-image:
            radial-gradient(circle at 15% 30%, rgba(255,255,255,0.08), transparent 25%),
            radial-gradient(circle at 85% 50%, rgba(255,255,255,0.08), transparent 25%),
            radial-gradient(circle at 75% 90%, rgba(255,255,255,0.08), transparent 20%);
        }
      `}</style>

      {/* Curseur goutte d'eau */}
      <div
        className="pointer-events-none fixed z-[9999] h-8 w-6 -translate-x-1/2 -translate-y-1/2 rotate-12"
        style={{ left: mouse.x, top: mouse.y }}
      >
        <svg
          viewBox="0 0 100 130"
          className="h-full w-full drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
        >
          <defs>
            <linearGradient id="cursorDrop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#999999" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            d="M50 5 C35 25 15 45 15 75 C15 105 30 125 50 125 C70 125 85 105 85 75 C85 45 65 25 50 5 Z"
            fill="url(#cursorDrop)"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Halo autour de la souris */}
      <div
        className="pointer-events-none fixed z-[9998] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        style={{ left: mouse.x, top: mouse.y }}
      />

      {/* Background */}
      <div className="absolute inset-0 water-lines" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#000000_0%,#050505_40%,#101010_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.08),transparent_20%)]" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center gap-4">
            <DropLogo />
            <span className="text-2xl font-extrabold tracking-wide">
              CDP<span className="text-white/70">LEAKS</span>
            </span>
          </Link>

          <div className="flex items-center gap-10 text-lg font-medium text-white/90">
            <Link href="/" className="transition hover:text-white/60">
              Accueil
            </Link>
            <Link href="/profil" className="transition hover:text-white/60">
              Profil
            </Link>
          </div>

          <a
            href="https://discord.gg/c8CRsfkze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/60 bg-white/5 px-6 py-4 font-bold text-white shadow-[0_0_25px_rgba(255,255,255,0.12)] transition hover:bg-white hover:text-black"
          >
            <DiscordIcon />
            Discord
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-5 text-sm tracking-wide text-white/60">
          Fondée par TwixyLol
        </p>

        <div className="mb-12 inline-flex rounded-full border border-white/30 bg-white/5 px-7 py-3 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]">
          ⚡ Sécurisé • Rapide • Gratuit
        </div>

        <h1 className="mb-8 text-6xl font-extrabold leading-tight md:text-8xl">
          Bienvenue sur
          <span className="block text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
            CDPLEAKS
          </span>
        </h1>

        <p className="mb-14 max-w-3xl text-xl text-white/75">
          Accédez à une recherche simple, rapide et gratuite.
        </p>

        <a
          href="https://discordapp.com/channels/1506328287624827171/1506335393782562877"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-5 rounded-3xl border border-white/70 bg-white/5 px-20 py-8 text-4xl font-extrabold text-white shadow-[0_0_50px_rgba(255,255,255,0.18)] transition hover:scale-105 hover:bg-white hover:text-black"
        >
          <span className="transition group-hover:rotate-12 group-hover:scale-125">
            🔍
          </span>
          Recherche
        </a>
      </section>
    </main>
  );
}