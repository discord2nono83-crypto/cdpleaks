import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil" as any,
});

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "CDPLeaks VIP",
            description: "Accès VIP + rôle Discord",
          },
          unit_amount: 999, // 9,99 €
        },
        quantity: 1,
      },
    ],
    success_url:
      `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url:
      `${process.env.NEXT_PUBLIC_SITE_URL}/tarifs`,
  });

  return NextResponse.json({
    url: session.url,
  });
}