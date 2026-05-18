"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth() {
    if (!email || !password) {
      alert("Remplis email + mot de passe.");
      return;
    }

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.push("/");
      router.refresh();
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:3000/login",
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Compte créé. Vérifie ton email puis connecte-toi.");
      setIsLogin(true);
    }
  }

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  }

  async function loginWithDiscord() {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050014] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.08),transparent_35%)]" />

      <Link
        href="/"
        className="absolute top-6 left-6 z-10 px-5 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10"
      >
        ← Retour
      </Link>

      <section className="relative z-10 w-full max-w-xl rounded-3xl border border-purple-500/50 bg-black/40 backdrop-blur-2xl p-10 shadow-[0_0_70px_rgba(168,85,247,0.25)]">
        <h1 className="text-5xl font-extrabold text-center mb-8">
          {isLogin ? "Connexion" : "Inscription"}
        </h1>

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white placeholder:text-gray-400"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white placeholder:text-gray-400"
        />

        <button
          onClick={handleAuth}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 font-extrabold shadow-[0_0_30px_rgba(168,85,247,0.45)] transition"
        >
          {isLogin ? "Se connecter" : "Créer mon compte"}
        </button>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-gray-400 font-bold">OU</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full mb-4 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 font-bold flex items-center justify-center gap-3 transition"
        >
          <span className="text-2xl">G</span>
          Se connecter avec Google
        </button>

        <button
          onClick={loginWithDiscord}
          className="w-full py-4 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/50 hover:bg-[#5865F2]/30 font-bold flex items-center justify-center gap-3 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 127.14 96.36"
            className="w-6 h-6 fill-[#5865F2]"
          >
            <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.27 8.14C2.79 32.65-1.71 56.6.56 80.21A105.73 105.73 0 0 0 32.71 96.36a77.7 77.7 0 0 0 6.84-11.14a68.42 68.42 0 0 1-10.78-5.18c.91-.66 1.8-1.34 2.66-2.05c20.77 9.48 43.36 9.48 63.88 0c.87.71 1.76 1.39 2.67 2.05a68.68 68.68 0 0 1-10.79 5.19a77 77 0 0 0 6.84 11.13a105.25 105.25 0 0 0 32.55-16.16c2.66-27.32-4.55-51-18.88-72.13ZM42.45 65.69C36.18 65.69 31 59.98 31 52.96s5.05-12.73 11.42-12.73c6.46 0 11.57 5.78 11.46 12.73c0 7.02-5.05 12.73-11.43 12.73Zm42.24 0c-6.27 0-11.43-5.71-11.43-12.73s5.05-12.73 11.43-12.73c6.46 0 11.57 5.78 11.46 12.73c0 7.02-5.05 12.73-11.46 12.73Z" />
          </svg>
          Se connecter avec Discord
        </button>

        <p className="text-center text-gray-300 mt-8">
          {isLogin ? "Pas de compte ?" : "Déjà un compte ?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-300 font-extrabold hover:text-white"
          >
            {isLogin ? "S'inscrire" : "Se connecter"}
          </button>
        </p>
      </section>
    </main>
  );
}