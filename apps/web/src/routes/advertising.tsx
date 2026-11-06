import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/advertising")({
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
								<BreadcrumbPage>Advertising & Sponsorship</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
					<h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
						Advertising & Sponsorship
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
							Reach a dedicated audience of project professionals. We offer
							sponsorship packages for monthly meetings, the annual symposium,
							and digital advertising on our website.
						</p>
						<p className="leading-7">
							<Link
								className="underline underline-offset-2 hover:opacity-70"
								to="/contact"
							>
								Contact us
							</Link>{" "}
							to request a media kit.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
