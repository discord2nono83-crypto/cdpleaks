"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "Nolan83000") {
      localStorage.setItem("admin-auth", "true");
      window.location.href = "/admin";
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-purple-500/10 border border-purple-500/30 rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold text-yellow-300 mb-6 text-center">
          🔐 Admin Login
        </h1>

        <input
          type="password"
          placeholder="Mot de passe admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 mb-4 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300"
        >
          Se connecter
        </button>
      </div>
    </main>
  );
}