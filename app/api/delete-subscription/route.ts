import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const { error } = await supabaseAdmin
      .from("subscriptions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("DELETE ERROR:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}