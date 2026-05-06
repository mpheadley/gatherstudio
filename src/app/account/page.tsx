import { auth, currentUser } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Account Settings</h1>
          <p className="text-lg text-[var(--text-body)] mt-2">Manage your profile, password, and security</p>
        </div>

        {/* Clerk UserProfile Component */}
        <div className="bg-white">
          <UserProfile
            appearance={{
              elements: {
                rootBox: "bg-white",
                cardBox: "shadow-none border-0",
                card: "shadow-none",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
