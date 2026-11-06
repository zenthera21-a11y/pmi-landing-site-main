import { createFileRoute } from "@tanstack/react-router";
import { CertificationPageTemplate } from "../../components/certifications/page-template";
import { getCertificationBySlug } from "../../components/certifications/pages-data";

export const Route = createFileRoute("/certifications/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const { slug } = Route.useParams();
	const certification = getCertificationBySlug(slug);

	if (!certification) {
		return (
			<div className="container mx-auto max-w-3xl px-4 py-8">
				<h1 className="font-bold text-2xl">Certification not found</h1>
				<p className="mt-2 text-muted-foreground">
					The certification you are looking for does not exist.
				</p>
			</div>
		);
	}

	return <CertificationPageTemplate data={certification} />;
}
