import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemSeparator,
	ItemTitle,
} from "@pmi-south-asia/ui/components/item";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const networkItems = [
	{
		id: "level-up",
		title: "Level up",
		description:
			"Take advantage of custom-designed educational events and workshops that will further your career and increase your knowledge.",
		href: "/learning/online-courses",
		image: "/assets/home/level-up-your-skills.webp",
		imageAlt: "Professionals attending a PMI workshop",
	},
] as const;

export function Network() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<ItemGroup className="gap-0">
					{networkItems.map((item, index) => (
						<div key={item.id}>
							<Item className="grid grid-cols-1 items-center gap-8 rounded-none border-0 px-0 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1fr)] md:gap-12 md:py-12 lg:gap-16">
								<ItemTitle className="line-clamp-none font-bold font-heading text-3xl text-[#200f3b] leading-tight md:text-4xl">
									{item.title}
								</ItemTitle>
								<ItemContent className="gap-5">
									<ItemDescription className="line-clamp-none text-[#6b5b7b] text-base leading-relaxed md:text-lg">
										{item.description}
									</ItemDescription>
									<Link
										className="inline-flex w-fit items-center gap-1 font-semibold text-[#200f3b] text-base transition-opacity hover:opacity-80"
										to={item.href}
									>
										Learn More
										<IconChevronRight aria-hidden="true" className="size-4" />
									</Link>
								</ItemContent>
								<ItemMedia
									className="size-auto w-full overflow-hidden rounded-2xl [&_img]:aspect-[4/3] [&_img]:size-full [&_img]:object-cover"
									variant="image"
								>
									<img
										alt={item.imageAlt}
										className="size-full object-cover"
										height={300}
										src={item.image}
										width={400}
									/>
								</ItemMedia>
							</Item>
							{index < networkItems.length - 1 ? (
								<ItemSeparator className="my-0 bg-[#d4cbc3]" />
							) : null}
						</div>
					))}
				</ItemGroup>
			</div>
		</section>
	);
}
