import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const plans = {
  vip: { name: "VIP - 3 jours", price: 100 },
  elite: { name: "ÉLITE - 1 semaine", price: 300 },
  legendaire: { name: "LÉGENDAIRE - 1 mois", price: 500 },
  master: { name: "MASTER - Lifetime", price: 2500 },
};

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();
    const selectedPlan = plans[plan as keyof typeof plans];

    if (!selectedPlan) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: selectedPlan.name,
            },
            unit_amount: selectedPlan.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?plan=${plan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/tarifs`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("ERREUR STRIPE:", error.message);

    return NextResponse.json(
      { error: error.message || "Erreur Stripe" },
      { status: 500 }
    );
  }
}