import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

const GATHER_PRODUCTS = [
  {
    category: "Wedding Vendors",
    apps: [
      { name: "PetalStudio", slug: "petalstudio", url: "https://petalstudio.app", description: "Florist recipes, pricing, and proposals" },
      { name: "VenueStudio", slug: "venuestudio", url: "https://venuestudio.app", description: "Venue management and booking" },
      { name: "DressStudio", slug: "dressstudio", url: "https://dressstudio.app", description: "Bridal dress shop management" },
      { name: "ShootStudio", slug: "shootstudio", url: "https://shootstudio.app", description: "Photographer booking and portfolio" },
      { name: "BeatStudio", slug: "beatstudio", url: "https://beatstudio.app", description: "DJ and live music booking" },
      { name: "GlowStudio", slug: "glowstudio", url: "https://glowstudio.app", description: "Salon and beauty services" },
      { name: "CakeStudio", slug: "cakestudio", url: "https://cakestudio.app", description: "Bakery and cake orders" },
    ],
  },
  {
    category: "Market & Events",
    apps: [
      { name: "Marketday Manager", slug: "marketday", url: "https://marketdayapp.com", description: "Farmers market organization" },
      { name: "MarketVendor", slug: "marketvendor", url: "https://marketvendor.app", description: "Vendor public pages" },
      { name: "ExpoStudio", slug: "expostudio", url: "https://expostudio.app", description: "Bridal expo management" },
    ],
  },
  {
    category: "Coaching & Community",
    apps: [
      { name: "Homiletics Coach", slug: "sermoncoach", url: "https://sermoncoach.app", description: "Sermon preparation coaching" },
      { name: "CurtainCall", slug: "curtaincall", url: "https://curtaincall.app", description: "Theater production management" },
      { name: "Roster", slug: "roster", url: "https://roster.app", description: "Sports team and practice scheduling" },
      { name: "Lesson Studio", slug: "lessonStudio", url: "https://lessonStudio.app", description: "Music lesson scheduling" },
    ],
  },
];

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome, {user?.firstName || "Builder"}</h1>
            <p className="text-lg text-[var(--text-body)]">Explore all Gather products and manage your subscriptions</p>
          </div>
          <Link href="/account" className="btn-primary">
            Account Settings
          </Link>
        </div>

        {/* My Products Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">My Products</h2>
            <p className="text-[var(--text-body)] mt-2">Products you have access to</p>
          </div>
          <p className="text-[var(--text-body)] text-lg">
            No active subscriptions yet. Explore our full suite below to get started.
          </p>
        </section>

        {/* All Products Grid */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold">All Gather Products</h2>
            <p className="text-[var(--text-body)] mt-2">Browse and subscribe to any of our 15+ specialized apps</p>
          </div>

          {GATHER_PRODUCTS.map((category) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)]">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.apps.map((app) => (
                  <a
                    key={app.slug}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {app.name}
                    </h4>
                    <p className="text-[var(--text-body)] text-sm mb-4">{app.description}</p>
                    <div className="text-sm font-semibold text-[var(--primary)]">Open App →</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-16 p-8 bg-[var(--primary)] text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Questions?</h3>
          <p className="mb-6 text-white/90">
            Check out our FAQ or contact our support team. We respond within 24 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/pricing" className="btn-outline-white">
              View Pricing
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Support
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
