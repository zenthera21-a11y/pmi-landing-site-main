import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* Hero — PMI surface-secondary (colors-violet-50: rgb(240,238,244)) */}
			<div className="w-full bg-pmi-surface-secondary">
				<div className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Accessibility</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
					<h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
						Accessibility
					</h1>
				</div>
			</div>

			{/* Content — white card, rounded-md (24px) top corners overlapping hero */}
			<div
				className="relative w-full overflow-hidden bg-pmi-surface-primary"
				style={{
					borderRadius: "var(--pmi-rounded-md) var(--pmi-rounded-md) 0 0",
					marginTop: "calc(-1 * var(--pmi-rounded-md))",
				}}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-6 lg:px-4 lg:py-10">
					<div className="space-y-5 font-aeonik text-pmi-text-primary">
						<h3 className="font-semibold text-lg">
							Accessibility at the Project Management Institute
						</h3>
						<p className="text-lg leading-7">
							The Project Management Institute (PMI) is committed to providing
							an inclusive digital experience that is accessible to all people,
							including those with disabilities. We strive to meet the Web
							Content Accessibility Guidelines (WCAG) 2.2 Level AA, a globally
							recognized standard for digital accessibility. This commitment
							also supports our compliance with international accessibility laws
							such as Section 508 (U.S.) and EN 301 549 (EU).
						</p>
						<p className="leading-7">
							We are continuously working to improve the accessibility of our
							websites, learning platforms, applications, and digital content.
							Our goal is to remove barriers, provide equitable access, and
							support full participation for all users.
						</p>
						<h3 className="font-semibold text-lg">Need Help?</h3>
						<p className="leading-7">
							If you encounter any accessibility barriers or need support
							accessing PMI digital content, please{" "}
							<a
								className="underline underline-offset-2 hover:opacity-70"
								href="/about/contact"
							>
								contact us via chat
							</a>
							. We welcome feedback and will respond promptly to address your
							concerns.
						</p>
						<h3 className="font-semibold text-lg">
							Certification Exam Accommodations
						</h3>
						<p className="leading-7">
							PMI offers testing accommodations for certification candidates
							with disabilities. For more information or to submit an
							accommodation request, please visit our{" "}
							<a
								className="underline underline-offset-2 hover:opacity-70"
								href="/certifications/certification-resources/accommodations"
							>
								Exam Accommodations page
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
