const benefits = [
	{
		id: "career",
		content: (
			<>
				Boost <strong>career growth</strong> and level up your skills with free
				and discounted professional education and certification.
			</>
		),
	},
	{
		id: "success",
		content: (
			<>
				Impact <strong>project success</strong> with members-only tools,
				resources, and expertise.
			</>
		),
	},
	{
		id: "community",
		content: (
			<>
				Connect with a <strong>global community</strong> of more than 800,000
				Project Professionals.
			</>
		),
	},
];

export function MembershipCta() {
	return (
		<section className="mx-auto max-w-[104rem] px-6 py-24 md:px-10 lg:py-28">
			<div
				className="relative overflow-hidden rounded-[3rem] bg-center bg-cover bg-no-repeat md:rounded-full"
				style={{ backgroundImage: "url(/assets/shared/membership-bg.jpg)" }}
			>
				<div className="relative grid gap-12 px-10 py-20 md:grid-cols-2 md:gap-0 md:px-16 md:py-24 lg:px-24 lg:py-28">
					<div className="flex flex-col gap-7 md:pr-14 lg:pr-20">
						<div className="flex items-center gap-3">
							<img
								alt=""
								aria-hidden="true"
								className="h-7 w-7"
								height="28"
								src="/assets/shared/membership-icon.svg"
								width="28"
							/>
							<span className="font-medium text-base text-white/90">
								PMI Membership
							</span>
						</div>

						<h2 className="font-bold font-heading text-4xl text-white leading-tight md:text-[2.75rem] lg:text-5xl">
							Unlock opportunity with PMI membership
						</h2>

						<p className="max-w-md text-base text-white/80 leading-relaxed md:text-lg">
							Join PMI for exclusive access to career development resources,
							project tools, and a global community.
						</p>

						<a
							className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3.5 font-medium text-[#200f3b] text-base transition-opacity hover:opacity-90"
							href="/membership"
						>
							<img
								alt=""
								aria-hidden="true"
								className="h-5 w-5"
								height="20"
								src="/assets/shared/membership-icon.svg"
								width="20"
							/>
							Explore Membership
						</a>
					</div>

					<div
						aria-hidden="true"
						className="absolute top-1/2 left-1/2 hidden h-3/4 w-px -translate-x-1/2 -translate-y-1/2 bg-violet-400/80 shadow-[0_0_16px_4px_rgba(167,139,250,0.5)] md:block"
					/>

					<div className="flex flex-col justify-center gap-8 md:pl-14 lg:pl-20">
						{benefits.map((benefit) => (
							<p
								className="text-base text-white/90 leading-relaxed md:text-lg [&_strong]:font-semibold [&_strong]:text-white"
								key={benefit.id}
							>
								{benefit.content}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
