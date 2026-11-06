import { createFileRoute } from "@tanstack/react-router";
import { BrightlineHero } from "@/components/learning/brightline/hero";
import { BrightlineTabs } from "@/components/learning/brightline/tabs";

export const Route = createFileRoute("/learning/brightline")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<BrightlineHero />
			<BrightlineTabs />
		</main>
	);
}
