import { auth } from "@clerk/nextjs/server";

export async function requireUser() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  return { userId };
}
