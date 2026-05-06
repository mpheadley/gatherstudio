import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import { PageHero, CTABanner } from "@/app/components/sections";

const PRODUCTS_BY_VERTICAL = [
  {
    vertical: "wedding",
    name: "Wedding Studios",
    description: "Complete platform for wedding vendors",
    apps: [
      {
        name: "PetalStudio",
        tier: "Professional",
        price: "$49–69/mo",
        description: "Florist recipe, pricing, proposals, and white-label customer portal",
        features: ["Unlimited designs", "White-label portal", "Pre-orders", "No transaction fees"],
        url: "https://petalstudio.app",
      },
      {
        name: "VenueStudio",
        tier: "Professional",
        price: "$49–69/mo",
        description: "Venue booking, proposals, and event timeline management",
        features: ["Booking calendar", "Proposal builder", "Timeline views", "Guest management"],
        url: "https://venuestudio.app",
      },
      {
        name: "DressStudio",
        tier: "Professional",
        price: "$39–59/mo",
        description: "Bridal dress shop inventory and customer appointments",
        features: ["Inventory tracking", "Appointment booking", "Fitting notes", "Customer profiles"],
        url: "https://dressstudio.app",
      },
      {
        name: "ShootStudio",
        tier: "Professional",
        price: "$49–69/mo",
        description: "Photographer booking, gallery, and client deliverables",
        features: ["Client portal", "Gallery uploads", "Delivery tracking", "Session pricing"],
        url: "https://shootstudio.app",
      },
      {
        name: "BeatStudio",
        tier: "Professional",
        price: "$49–69/mo",
        description: "DJ and live music booking and event playlists",
        features: ["Booking calendar", "Playlist builder", "Client reviews", "Payment tracking"],
        url: "https://beatstudio.app",
      },
      {
        name: "GlowStudio",
        tier: "Professional",
        price: "$39–59/mo",
        description: "Hair and makeup artist booking and scheduling",
        features: ["Appointment calendar", "Service pricing", "Team scheduling", "Client notes"],
        url: "https://glowstudio.app",
      },
      {
        name: "CakeStudio",
        tier: "Professional",
        price: "$39–59/mo",
        description: "Bakery order management and custom cake design",
        features: ["Order tracking", "Design templates", "Customer orders", "Delivery calendar"],
        url: "https://cakestudio.app",
      },
    ],
  },
  {
    vertical: "market",
    name: "Market & Vendor Tools",
    description: "Farmers market and vendor event management",
    apps: [
      {
        name: "Marketday Manager",
        tier: "Essential",
        price: "$19–49/mo",
        description: "Farmers market organizer tool: vendor roster, status updates, schedules",
        features: ["Vendor roster", "Schedule management", "Real-time updates", "Public market page"],
        url: "https://marketdayapp.com",
      },
      {
        name: "MarketVendor",
        tier: "Free",
        price: "Free",
        description: "Vendor profile pages for markets and expos",
        features: ["Public profile page", "Product listing", "QR code", "Contact sharing"],
        url: "https://marketvendor.app",
      },
      {
        name: "ExpoStudio",
        tier: "Professional",
        price: "$49–69/mo",
        description: "Bridal and trade expo management for organizers",
        features: ["Booth management", "Vendor directory", "Schedule tools", "Lead capture"],
        url: "https://expostudio.app",
      },
    ],
  },
  {
    vertical: "coaching",
    name: "Coaching & Community",
    description: "Tools for pastors, musicians, coaches, and community leaders",
    apps: [
      {
        name: "Homiletics Coach",
        tier: "Essential",
        price: "$19/mo",
        description: "AI-powered Socratic sermon preparation coach",
        features: ["Sermon coaching", "Outline builder", "Delivery prep", "Audience notes"],
        url: "https://sermoncoach.app",
      },
      {
        name: "CurtainCall",
        tier: "Essential",
        price: "$29/mo (director)",
        description: "Theater production management for directors and cast",
        features: ["Script management", "Rehearsal scheduling", "Cast communication", "Blocking notes"],
        url: "https://curtaincall.app",
      },
      {
        name: "Roster",
        tier: "Essential",
        price: "$19/mo (coach)",
        description: "Sports team scheduling and practice management",
        features: ["Practice schedule", "Team messaging", "Attendance tracking", "Skill notes"],
        url: "https://roster.app",
      },
      {
        name: "Lesson Studio",
        tier: "Professional",
        price: "$49/mo",
        description: "Music lesson studio scheduling and student management",
        features: ["Lesson calendar", "Student tracking", "Attendance", "Progress notes"],
        url: "https://lessonStudio.app",
      },
    ],
  },
];

export async function generateMetadata() {
  return {
    title: "Gather Products | All 15+ Apps Across Verticals",
    description: "Explore the complete Gather product suite: wedding vendors, market tools, and coaching apps. Pick the platforms you need.",
  };
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* Hero */}
      <PageHero
        eyebrow="Product Directory"
        title="All Gather Products"
        description="15+ specialized apps across wedding vendors, market organizers, event coordinators, and community leaders. Pick what you need."
        variant="centered"
      />

      {/* Verticals */}
      <section className="section section-light">
        <div className="container mx-auto px-4">
          {PRODUCTS_BY_VERTICAL.map((vertical) => (
            <div key={vertical.vertical} id={vertical.vertical} className="mb-20">
              <AnimateOnScroll>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{vertical.name}</h2>
                  <p className="text-lg text-[var(--text-body)]">{vertical.description}</p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vertical.apps.map((app, idx) => (
                  <AnimateOnScroll key={app.name} delay={idx * 50}>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group hover:shadow-lg transition-shadow flex flex-col h-full"
                    >
                      <div className="mb-4 inline-block">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                          {app.tier}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {app.name}
                      </h3>

                      <p className="text-[var(--text-body)] text-sm mb-4 flex-grow">{app.description}</p>

                      <div className="mb-4">
                        <ul className="space-y-1 text-sm text-[var(--text-body)]">
                          {app.features.slice(0, 2).map((feature) => (
                            <li key={feature} className="flex items-start">
                              <span className="mr-2 text-[var(--primary)]">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-end">
                        <span className="font-bold text-[var(--primary)]">{app.price}</span>
                        <span className="text-sm font-semibold text-[var(--primary)]">Learn more →</span>
                      </div>
                    </a>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to start building your business?"
        description="Sign in to explore all products, start a free trial, or contact us with questions about founding member pricing."
        primaryCTA={{ label: "Sign In", href: "/auth/signin" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="light"
      />
    </>
  );
}
