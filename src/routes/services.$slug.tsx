import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — The Pause Room` : "The Pause Room";
    const description = s?.intro ?? "A peaceful sanctuary for emotional wellness.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s?.hero ? [{ property: "og:image", content: s.hero }] : []),
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-display">This room is still being prepared.</h1>
        <p className="mt-3 text-muted-foreground">The service you're looking for couldn't be found.</p>
        <a href="/#services" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm">View all services</a>
      </div>
    </div>
  ),
  component: ServiceRoute,
});

function ServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServicePage service={service} />;
}

// Touch services to ensure tree-shaking keeps imports loaded.
void services;
