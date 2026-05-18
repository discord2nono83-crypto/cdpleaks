import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { discordId } = await req.json();

    if (!discordId) {
      return NextResponse.json(
        { error: "discordId manquant" },
        { status: 400 }
      );
    }

    const guildId = process.env.DISCORD_GUILD_ID!;
    const roleId = process.env.DISCORD_VIP_ROLE_ID!;
    const botToken = process.env.DISCORD_BOT_TOKEN!;

    const response = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members/${discordId}/roles/${roleId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: text },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Rôle VIP ajouté avec succès",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}