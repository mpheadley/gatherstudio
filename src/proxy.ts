import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/products",
  "/pricing",
  "/contact",
  "/privacy",
  "/preview(.*)",
  "/auth/signin(.*)",
  "/auth/signup(.*)",
]);

export const proxy = clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|cur|heic|heif|mp4)(?:\\?.*)?|__next).*)",
    "/(api|trpc)(.*)",
  ],
};
