import { IconDownload } from "@tabler/icons-react";
import type { CertificationPageType } from "./pages-data";

interface CertificationDetailsProps {
	aboutExam: CertificationPageType["aboutExam"];
	examContentOutline: CertificationPageType["examContentOutline"];
	isRightForYou: CertificationPageType["isRightForYou"];
}

export function CertificationDetails({
	aboutExam,
	examContentOutline,
	isRightForYou,
}: CertificationDetailsProps) {
	return (
		<section className="bg-white py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				{/* Is Right For You Section */}
				<div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-20">
					<h2 className="font-heading font-semibold text-3xl text-[#1d1d35] md:text-4xl">
						{isRightForYou.title}
					</h2>
					<div className="flex flex-col gap-8">
						<p className="text-base text-slate-700 leading-relaxed">
							{isRightForYou.description}
						</p>

						<ul className="grid gap-2 text-base text-slate-700">
							{isRightForYou.roles.map((role) => (
								<li className="flex items-start gap-2" key={role}>
									<span
										aria-hidden="true"
										className="mt-2 size-1.5 shrink-0 bg-slate-700"
									/>
									{role}
								</li>
							))}
						</ul>

						<hr className="border-slate-200" />

						<div className="grid gap-6 sm:grid-cols-2">
							{isRightForYou.stats.map((stat) => (
								<div className="flex flex-col gap-2" key={stat.value}>
									<span className="font-bold text-4xl text-[#007ba7] md:text-5xl">
										{stat.value}
									</span>
									<span className="text-base text-slate-700 leading-relaxed">
										{stat.label}
										{stat.source && (
											<>
												{" "}
												<a
													className="underline underline-offset-2 hover:text-[#1d1d35]"
													href={stat.sourceUrl}
													rel="noopener noreferrer"
													target="_blank"
												>
													{stat.source}
												</a>
											</>
										)}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<hr className="my-16 border-slate-200 md:my-20" />

				{/* Exam Content Outline Section */}
				<div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-20">
					<h2 className="font-heading font-semibold text-3xl text-[#1d1d35] md:text-4xl">
						{examContentOutline.title}
					</h2>
					<div className="flex flex-col gap-6">
						<p className="text-base text-slate-700 leading-relaxed">
							{examContentOutline.description}
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<select className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-700 outline-none focus:border-[#007ba7] focus:ring-2 focus:ring-[#007ba7]/20">
								{examContentOutline.languages.map((lang) => (
									<option key={lang} value={lang}>
										{lang}
									</option>
								))}
							</select>
							<a
								className="inline-flex items-center gap-2 rounded-full border border-[#1d1d35] px-6 py-2.5 font-medium text-[#1d1d35] transition-colors hover:bg-[#1d1d35] hover:text-white"
								download
								href={examContentOutline.downloadUrl}
							>
								<IconDownload aria-hidden="true" className="size-4" />
								Download
							</a>
						</div>
					</div>
				</div>

				<hr className="my-16 border-slate-200 md:my-20" />

				{/* About the Exam Section */}
				<div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-20">
					<h2 className="font-heading font-semibold text-3xl text-[#1d1d35] md:text-4xl">
						{aboutExam.title}
					</h2>
					<div className="flex flex-col gap-8">
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<h3 className="mb-2 font-semibold text-[#1d1d35] text-base">
									Exam length
								</h3>
								<p className="text-base text-slate-700">{aboutExam.length}</p>
							</div>
							<div>
								<h3 className="mb-2 font-semibold text-[#1d1d35] text-base">
									Exam time
								</h3>
								<p className="text-base text-slate-700">{aboutExam.time}</p>
							</div>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-[#1d1d35] text-base">
								Languages
							</h3>
							<ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-base text-slate-700 sm:grid-cols-2 md:grid-cols-3">
								{aboutExam.languages.map((lang) => (
									<li className="flex items-start gap-2" key={lang}>
										<span
											aria-hidden="true"
											className="mt-2 size-1.5 shrink-0 bg-slate-700"
										/>
										{lang}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
