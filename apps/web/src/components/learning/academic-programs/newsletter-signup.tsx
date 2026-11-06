import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const newsletterBenefits = [
	"The latest trends and research in project management",
	"Teaching tools and resources",
	"Industry opportunities like events, calls for papers, and awards",
	"A resource section to share with your students",
] as const;

export function NewsletterSignup() {
	return (
		<section style={{ backgroundColor: "#ffffff" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<div className="mx-auto max-w-3xl rounded-2xl border border-[#d4cbc3] bg-[#f8f5f0] p-8 md:p-12 lg:p-16">
					<div className="flex flex-col items-center text-center">
						<h2
							className="mb-4 font-bold font-heading text-3xl leading-tight md:text-4xl"
							style={{ color: "#200f3b" }}
						>
							Academic insights straight to your inbox
						</h2>
						<p
							className="mb-6 max-w-2xl text-base leading-relaxed md:text-lg"
							style={{ color: "#6b5b7b" }}
						>
							Calling project management faculty and scholars! Get industry
							updates to enhance your work, teaching and research delivered
							monthly by email in the PMI Academic Network Newsletter,
							including:
						</p>
						<ul className="mb-8 flex w-full max-w-xl flex-col gap-3 text-left">
							{newsletterBenefits.map((benefit) => (
								<li
									className="flex items-start gap-3 text-sm leading-relaxed md:text-base"
									key={benefit}
									style={{ color: "#6b5b7b" }}
								>
									<span
										className="mt-1.5 block size-1.5 shrink-0 rounded-full"
										style={{ backgroundColor: "#5621b4" }}
									/>
									{benefit}
								</li>
							))}
						</ul>
						<Link
							className="inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/contact"
						>
							Sign Up
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
