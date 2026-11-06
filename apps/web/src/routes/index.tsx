import { createFileRoute } from "@tanstack/react-router";
import { Community } from "@/components/home/community";
import { CpmaiPromo } from "@/components/home/cpmai-promo";
import { Hero } from "@/components/home/hero";
import { MembershipCta } from "@/components/home/membership-cta";
import { NearbyChapters } from "@/components/home/nearby-chapters";
import { Network } from "@/components/home/network";
import { Resources } from "@/components/home/resources";
import { SecondaryCta } from "@/components/home/secondary-cta";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<WhyChooseUs />
			<MembershipCta />
			<Resources />
			<CpmaiPromo />
			<Community />
			<NearbyChapters />
			<Network />
			<SecondaryCta />
		</main>
	);
}
