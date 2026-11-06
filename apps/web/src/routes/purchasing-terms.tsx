import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/purchasing-terms")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="overflow-x-hidden" id="main-layout">
      <div className="w-full bg-pmi-surface-secondary">
        <div className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Purchasing Terms</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
          <h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
            Purchasing Terms
          </h1>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden bg-pmi-surface-primary"
        style={{
          borderRadius: "var(--pmi-rounded-md) var(--pmi-rounded-md) 0 0",
          marginTop: "calc(-1 * var(--pmi-rounded-md))",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-6 lg:px-4 lg:py-10">
          <div className="space-y-5 font-aeonik text-pmi-text-primary">
            <p className="text-lg leading-7">
              Terms and conditions applicable to the purchase of event tickets,
              merchandise, and other PMI SA products.
            </p>
            <p className="leading-7">
              <strong>Refund Policy:</strong> Event cancellations must be
              received 48 hours prior to the event for a full refund.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
