import { Toaster } from "@pmi-south-asia/ui/components/sonner";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/footer";
import Header from "@/components/header";

import "../index.css";

export type RouterAppContext = {};

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "PMI Global Services | Project Management & Professional Certifications",
      },
      {
        name: "description",
        content: "PMI Global Services empowers project professionals through certifications, professional learning, and organizational solutions.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster richColors />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
