import { IconChevronRight } from "@tabler/icons-react";
import type { CertificationPageType } from "./pages-data";

interface HeroSectionProps {
	hero: CertificationPageType["hero"];
}

export function HeroSection({ hero }: HeroSectionProps) {
	return (
		<section
			className="relative w-full overflow-hidden"
			style={{
				backgroundImage:
					"linear-gradient(160deg, #061828 0%, #0c2a3d 45%, #0a2233 100%)",
			}}
		>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-overlay"
				height={800}
				src="/assets/shared/grainy-texture.webp"
				width={1200}
			/>

			<div className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
				<nav className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/60">
					{hero.breadcrumb.map((item, index) => (
						<span className="flex min-w-0 items-center gap-2" key={item.label}>
							{index > 0 && <span aria-hidden="true">/</span>}
							{item.href ? (
								<a
									className="wrap-break-word transition-colors hover:text-white"
									href={item.href}
								>
									{item.label}
								</a>
							) : (
								<span className="wrap-break-word text-white/80">
									{item.label}
								</span>
							)}
						</span>
					))}
				</nav>

				<div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 lg:gap-20">
					<div className="relative flex shrink-0 items-center justify-center">
						<img
							alt=""
							aria-hidden="true"
							className="size-56 object-contain md:size-72 lg:size-80"
							height={320}
							src={hero.shapeImage}
							width={320}
						/>
						<img
							alt={hero.logoAlt}
							className="absolute top-1/2 left-1/2 h-auto w-[55%] max-w-[180px] -translate-x-1/2 -translate-y-1/2"
							height={64}
							src={hero.logoImage}
							width={160}
						/>
					</div>

					<div className="flex w-full flex-1 flex-col gap-5 md:gap-6">
						<span className="inline-flex w-fit rounded-full border border-white/35 px-4 py-1 text-sm text-white">
							{hero.certificationBadge}
						</span>

						<h1 className="font-bold font-heading text-3xl text-white leading-[1.12] md:text-4xl lg:text-[2.75rem]">
							{hero.title}
						</h1>

						<p className="font-medium text-lg text-white md:text-xl">
							{hero.subtitle}
						</p>

						<p className="max-w-xl text-base text-white/85 leading-relaxed">
							{hero.description}
						</p>

						<hr className="border-white/20" />

						<div className="flex flex-wrap items-end gap-6 md:gap-10">
							<div>
								<p className="text-sm text-white/70">Member price</p>
								<p className="font-bold text-2xl text-white md:text-[1.75rem]">
									{hero.pricing.memberPrice}
								</p>
							</div>
							<div>
								<p className="text-sm text-white/50">Full price</p>
								<p className="text-2xl text-white/50 md:text-[1.75rem]">
									{hero.pricing.fullPrice}
								</p>
							</div>
							<a
								className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3 font-medium text-[#0a1628] transition-colors hover:bg-white/90 sm:ml-auto sm:w-auto sm:justify-start"
								href={hero.applyButtonHref}
							>
								{hero.applyButtonText}
							</a>
						</div>

						<p className="max-w-lg text-sm text-white/55 leading-relaxed">
							{hero.note}
						</p>

						<a
							className="inline-flex w-fit items-center gap-1 font-medium text-white transition-colors hover:text-white/80"
							href={hero.membershipLink.href}
						>
							{hero.membershipLink.text}
							<IconChevronRight aria-hidden="true" className="size-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
