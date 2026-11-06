import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export function BrightlineHero() {
	return (
		<section
			className="relative w-full bg-center bg-cover bg-no-repeat"
			style={{
				backgroundColor: "#1e0a45",
				backgroundImage:
					"url(/images/learning/brightline/brightline_hero_desktop.jpg)",
			}}
		>
			<div className="mx-auto grid min-h-[500px] place-content-center px-6 py-24 text-center md:min-h-[600px] md:px-10 lg:min-h-[700px] lg:py-32">
				<div className="mx-auto max-w-4xl">
					<h1 className="mb-6 font-heading font-medium text-4xl text-white leading-tight md:text-5xl lg:text-6xl">
						Harness the force of your organization for transformation
					</h1>
					<p className="mx-auto mb-8 max-w-3xl text-lg text-white/80 leading-relaxed md:text-xl">
						Through research and thought leadership, the Brightline® Initiative
						of PMI inspires and provides strategic direction to senior executive
						leaders to help transform their organizations for long-term growth.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#1e0a45] transition hover:bg-white/90"
						to="/business-solutions/transformation"
					>
						Visit Brightline
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
