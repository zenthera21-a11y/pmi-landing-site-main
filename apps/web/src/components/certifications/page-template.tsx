import { CertificationDetails } from "./certification-details";
import { ExamPrep } from "./exam-prep";
import { HeroSection } from "./hero-section";
import { MaintainingCertification } from "./maintaining-certification";
import type { CertificationPageType } from "./pages-data";
import { PathToCertification } from "./path-to-certification";

type CertificationPageTemplateProps = {
	data: CertificationPageType;
};

export function CertificationPageTemplate({
	data,
}: CertificationPageTemplateProps) {
	return (
		<main className="overflow-x-hidden bg-[#0a1628]">
			<HeroSection hero={data.hero} />
			<CertificationDetails
				aboutExam={data.aboutExam}
				examContentOutline={data.examContentOutline}
				isRightForYou={data.isRightForYou}
			/>
			<PathToCertification pathToCertification={data.pathToCertification} />
			<ExamPrep examPrep={data.examPrep} />
			<MaintainingCertification
				maintainingCertification={data.maintainingCertification}
			/>
		</main>
	);
}
