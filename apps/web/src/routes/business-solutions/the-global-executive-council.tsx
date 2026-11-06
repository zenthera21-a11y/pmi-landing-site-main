import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/the-global-executive-council"
)({
	component: RouteComponent,
});

const INK = "#1f1646"; // --text-primary (light theme deep indigo)
const BODY = "#4a4458"; // --text-secondary
const CREAM = "#f7f3ec"; // --surface-secondary
const DARK_BTN = "#1c1330"; // --fill-off-black-darkest

const MEMBERS_LEFT = [
	"Accenture",
	"Airbus",
	"Amazon WHS",
	"Amtrak",
	"BAE Systems",
	"Banco de Credito del Peru BCP Ecopetrol",
	"BCG",
	"Boeing",
	"Bosch",
	"Burns & McDonnell",
	"Caterpillar Inc.",
	"CDW",
	"Central Bank of Nigeria",
	"CGI",
	"Changi Airport Group",
	"China Petroleum Engineering & Construction Corporation",
	"Christie's",
	"Cisco",
	"Citigroup",
	"Cognizant Technologies",
	"Copeland Corporation",
	"Dangote Industries",
	"Deere & Company",
	"Deloitte",
	"Dubai Municipality",
	"DXC Technology",
	"Electricity Company of Ghana",
	"Embraer",
	"Employment and Social Development Canada",
	"Entel",
	"ExlService Limited",
	"Feishu",
	"Fujitsu",
	"GE Vernova",
	"General Authority of Zakat - Tax & Customs Authority",
	"Google LLC",
	"Government of Canada - Department of National Defense",
	"GSK",
	"Hengbao Co., Ltd.",
	"Huawei Technologies Co., Ltd.",
	"IBM",
];

const MEMBERS_RIGHT = [
	"Indra Sistemas",
	"IPM",
	"Jellyfish",
	"Kingdee International Software Group",
	"Kyndryl",
	"Lagos State Government",
	"LTIMindtree",
	"Marcopolo",
	"Mayo Clinic",
	"Medtronic",
	"Michelin Group",
	"Microsoft",
	"MTN Ghana",
	"MTN Nigeria",
	"NASA",
	"National Infrastructure and Service Transformation Authority",
	"Nestlé",
	"NetOne",
	"Nokia",
	"Ontario Power Generation",
	"Ontario Public Service – Treasury Board Secretariat",
	"Pertamina",
	"Petrobras",
	"Petroliam Nasional Berhad",
	"PricewaterhouseCoopers",
	"Procter & Gamble",
	"Public Investment Fund (PIF) - Saudi Arabia",
	"Public Services and Procurement Canada",
	"Rand Water",
	"Road and Transport Authority",
	"Roche Diagnostics",
	"Saudi Aramco",
	"Shanghai Nuclear Engineering Research and Design Institute",
	"Shell",
	"slb",
	"U.S. Army Corps of Engineers",
	"U.S. Bank",
	"U.S. Department of Energy",
	"UK Ministry of Defence",
	"UN Women",
	"ZTE Corporation",
];

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" style={{ background: CREAM }}>
			{/* ── Breadcrumb ───────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pt-8 pb-2 lg:px-4">
				<nav aria-label="Breadcrumb">
					<ol
						className="flex flex-wrap items-center gap-1.5 font-medium text-sm"
						style={{ color: INK }}
					>
						<li>
							<Link className="hover:underline" to="/">
								Home
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li>
							<Link className="hover:underline" to="/business-solutions">
								PMI for Organizations
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li className="opacity-70">The Global Executive Council</li>
					</ol>
				</nav>
			</div>

			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-12 pb-16 lg:px-4 lg:pt-20 lg:pb-24">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
					{/* Left: image (circular shape baked into PNG, bleeds left) */}
					<div className="relative h-auto lg:col-span-5">
						<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
							<img
								alt="hands typing on a keyboard"
								className="h-auto w-full 2xl:rounded-sm"
								height={931}
								src="/images/business-solutions/transformation/general-landing_pmi-for-orgs.png"
								width={1024}
							/>
						</div>
					</div>

					{/* Right: heading + subtitle + CTA */}
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-[1.1] tracking-tight lg:text-5xl xl:text-6xl"
							style={{ color: INK }}
						>
							The Global Executive Council brings together leaders at the
							forefront of project management innovation
						</h1>
						<p
							className="mb-8 text-lg leading-relaxed lg:text-xl"
							style={{ color: BODY }}
						>
							Shaping the future of the project management profession and
							creating positive impact in a rapidly changing world.
						</p>
						<a
							className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
							href="mailto:TheCouncil@pmi.org"
							style={{ background: DARK_BTN }}
						>
							Contact TheCouncil@pmi.org
						</a>
					</div>
				</div>
			</section>

			{/* ── Let's work together ──────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-12 pb-12 lg:px-4 lg:pt-20 lg:pb-20">
				<div className="flex flex-col gap-12 lg:flex-row lg:gap-14">
					<div className="lg:w-5/12 lg:shrink-0">
						<h2
							className="font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							Let's work together to maximize project success to elevate our
							world
						</h2>
					</div>
					<div className="min-w-0 lg:w-1/2">
						<p className="mb-6 text-lg leading-relaxed" style={{ color: BODY }}>
							The Global Executive Council at PMI unites esteemed
							representatives from top organizations worldwide to collaborate on
							the latest project management practices, craft enriching learning
							and networking opportunities, and host vibrant events with
							influential thought leaders. Through these efforts, our aim is
							clear—to steer the project profession toward a bright future and
							foster transformation in an ever-changing world.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							Is your organization fully devoted to:
						</p>
						<ul
							className="mb-6 list-disc space-y-3 pl-5 text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							<li>
								Embracing the strategic significance of project, program, and
								portfolio management to accomplish more with limited resources,
								meeting strategic goals, and averting costly project setbacks?
							</li>
							<li>
								Wholeheartedly backing the enhancement of project management
								capabilities as vital skills for both individuals and the
								organization?
							</li>
							<li>
								Actively shaping other global organizations' project, portfolio,
								and program management practices?
							</li>
						</ul>
						<p className="text-lg leading-relaxed" style={{ color: BODY }}>
							If so, then let's collaborate to make a robust and optimistic
							impact together!
						</p>
					</div>
				</div>
			</section>

			{/* ── Divider ──────────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
				<div className="h-px w-full bg-gray-300" />
			</div>

			{/* ── Member organizations ─────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-12 pb-16 lg:px-4 lg:pt-20 lg:pb-20">
				<h2
					className="mb-10 font-medium text-xl lg:text-2xl"
					style={{ color: INK }}
				>
					Join these council member organizations
				</h2>
				<div className="grid grid-cols-1 gap-x-14 gap-y-2 lg:grid-cols-2">
					<ul className="space-y-2 text-lg" style={{ color: INK }}>
						{MEMBERS_LEFT.map((org) => (
							<li key={org}>{org}</li>
						))}
					</ul>
					<ul className="space-y-2 text-lg" style={{ color: INK }}>
						{MEMBERS_RIGHT.map((org) => (
							<li key={org}>{org}</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
