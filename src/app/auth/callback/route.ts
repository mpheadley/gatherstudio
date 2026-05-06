import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect("/auth/signin");
  }

  // Determine which product/app the user should land in
  // For now, redirect to dashboard — future logic can check org type
  return NextResponse.redirect("/dashboard");
}
