import { NextResponse } from "next/server";
import { getImageKitAuthParameters } from "@/lib/imagekit";

export async function GET() {
  try {
    const authParams = getImageKitAuthParameters();
    return NextResponse.json(authParams);
  } catch (error: any) {
    console.error("ImageKit auth error:", error);
    return NextResponse.json(
      { error: "Failed to generate ImageKit authentication parameters" },
      { status: 500 }
    );
  }
}
