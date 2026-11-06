import { createFileRoute } from "@tanstack/react-router";
import { AcademicResources } from "@/components/learning/academic-programs/academic-resources";
import { FeaturedResources } from "@/components/learning/academic-programs/featured-resources";
import { FoundationsSection } from "@/components/learning/academic-programs/foundations-section";
import { GacSection } from "@/components/learning/academic-programs/gac-section";
import { AcademicProgramsHero } from "@/components/learning/academic-programs/hero";
import { NewsletterSignup } from "@/components/learning/academic-programs/newsletter-signup";

export const Route = createFileRoute("/learning/academic-programs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<AcademicProgramsHero />
			<AcademicResources />
			<GacSection />
			<FoundationsSection />
			<FeaturedResources />
			<NewsletterSignup />
		</main>
	);
}
