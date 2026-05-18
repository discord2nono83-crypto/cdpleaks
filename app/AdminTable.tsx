"use client";

import { useState } from "react";

export default function AdminTable({
  subscriptions,
}: {
  subscriptions: any[];
}) {
  const [search, setSearch] = useState("");

  const filtered = subscriptions.filter((sub) =>
    sub.email?.toLowerCase().includes(search.toLowerCase())
  );

  async function updateStatus(id: string, status: string) {
    const res = await fetch("/api/admin/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Erreur lors de la mise à jour.");
    }
  }

  async function deleteSubscription(id: string) {
    if (!confirm("Supprimer cet abonnement ?")) return;

    const res = await fetch("/api/admin/delete-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Erreur lors de la suppression.");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Rechercher par email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
      />

      <div className="overflow-x-auto border border-white/10 rounded-3xl">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4">Email</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Statut</th>
              <th className="p-4">Expiration</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((sub) => (
              <tr key={sub.id} className="border-t border-white/10">
                <td className="p-4">{sub.email}</td>

                <td className="p-4 text-yellow-300 font-bold">
                  {sub.plan}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      sub.status === "active"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {sub.status}
                  </span>
                </td>

                <td className="p-4">
                  {sub.expires_at
                    ? new Date(sub.expires_at).toLocaleDateString("fr-FR")
                    : "Jamais"}
                </td>

                <td className="p-4">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => updateStatus(sub.id, "active")}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg text-sm"
                    >
                      Activer
                    </button>

                    <button
                      onClick={() => updateStatus(sub.id, "inactive")}
                      className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded-lg text-sm"
                    >
                      Désactiver
                    </button>

                    <button
                      onClick={() => deleteSubscription(sub.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}