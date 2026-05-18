// app/api/save-subscription/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
const plans = {
  vip: { name: "VIP", days: 3 },
  elite: { name: "ÉLITE", days: 7 },
  legendaire: { name: "LÉGENDAIRE", days: 30 },
  master: { name: "MASTER", days: null }, // Lifetime
};

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();

    const selectedPlan = plans[plan as keyof typeof plans];

    if (!selectedPlan) {
      return NextResponse.json(
        { error: "Plan invalide" },
        { status: 400 }
      );
    }

    // Date d'expiration
    let expiresAt: string | null = null;

    if (selectedPlan.days !== null) {
      const date = new Date();
      date.setDate(date.getDate() + selectedPlan.days);
      expiresAt = date.toISOString();
    }

    // Sauvegarde dans Supabase
    const { data, error } = await supabaseAdmin
      .from("subscriptions")
      .insert([
        {
          email: "discord2nono83@gmail.com",
          plan: selectedPlan.name,
          status: "active",
          expires_at: expiresAt,
        },
      ]);

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("SAVE SUBSCRIPTION ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Erreur serveur" },
      { status: 500 }
    );
  }
}