import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await db.getAllContentAsync();
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Failed to fetch site content:", err);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}
