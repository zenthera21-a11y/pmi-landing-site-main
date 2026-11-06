import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
	component: RouteComponent,
});

/* ─────────────────── shared types ─────────────────── */

interface BlogPost {
	badge: string;
	date: string;
	description: string;
	href: string;
	image?: string;
	title: string;
}

/* ─────────────────── individual post data ─────────────────── */

interface PostData extends BlogPost {
	body: string[];
	relatedSlugs: string[];
}

const POSTS: Record<string, PostData> = {
	"adaptive-capacity-ai-decision-making": {
		badge: "Blog",
		date: "24 June 2026",
		description:
			"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
		href: "/blog/adaptive-capacity-ai-decision-making",
		image: "/images/blog/adaptive-capacity.jpg",
		relatedSlugs: [
			"ai-skills-perishable-durable-enduring",
			"pmo-reinvention-leading-the-shift",
		],
		title: "Judgment Builds Adaptive Capacity",
		body: [
			"The promise of AI in the enterprise is speed—faster decisions, faster analysis, faster output. But speed alone does not build adaptive capacity. It can, in fact, undermine it.",
			"Jim Highsmith, author of EDGE: Value-Driven Digital Transformation, argues that as organizations rush to upskill their workforce in AI, they risk making a critical error: training people to delegate judgment to machines rather than sharpen their own.",
			"Adaptive capacity—the organizational ability to sense change, make quality decisions under uncertainty, and course-correct quickly—is built through the exercise of judgment, not the avoidance of it. When AI becomes a crutch rather than a tool, decision quality erodes even as decision speed increases.",
			"The implication for project leaders is significant. Embracing AI means learning to use it as a thinking partner, not a thinking replacement. Ask AI to challenge your assumptions. Use it to simulate scenarios. But keep the judgment call yours.",
			"Organizations that get this right will develop a compounding advantage: people who are faster and smarter, not just faster. That is the foundation of genuine enterprise agility.",
		],
	},
	"pmo-reinvention-leading-the-shift": {
		badge: "Blog",
		date: "9 June 2026",
		description:
			"Enterprise PMO capability helps organizations improve strategy execution, decision-making, and value delivery at scale.",
		href: "/blog/pmo-reinvention-leading-the-shift",
		image: "/images/blog/pmo-reinvention.jpg",
		relatedSlugs: [
			"adaptive-capacity-ai-decision-making",
			"how-award-winning-pmos-drive-business-transformation",
		],
		title: "PMO Reinvention: Leading the Shift",
		body: [
			"The PMO is undergoing a fundamental transformation. What was once a project tracking and governance function is now being called upon to serve as a strategic nerve center for the enterprise.",
			"As organizational complexity rises—driven by digital transformation, distributed teams, and accelerating change—companies need more than project oversight. They need a PMO capability that connects strategy to execution, surfaces decision-relevant information, and helps leadership deliver measurable business value at scale.",
			"The shift from administrative PMO to strategic PMO requires a new set of competencies: business acumen, stakeholder influence, data literacy, and the ability to connect portfolio decisions to enterprise outcomes.",
			"PMOs that are leading this shift are investing in talent, tools, and governance models that match the pace of the business. They are becoming less about process compliance and more about enabling velocity, learning, and value.",
			"For project professionals aspiring to PMO leadership, the message is clear: the future of the PMO is strategic, and the organizations best positioned to win are those building that capability now.",
		],
	},
	"ai-skills-perishable-durable-enduring": {
		badge: "Blog",
		date: "5 June 2026",
		description:
			"Build skills for artificial intelligence by balancing fast-changing tools, durable methods and human capabilities that compound over time.",
		href: "/blog/ai-skills-perishable-durable-enduring",
		image: "/images/blog/ai-skills.jpg",
		relatedSlugs: [
			"modular-prompting-better-ai-results-project-managers",
			"adaptive-capacity-ai-decision-making",
		],
		title: "Build AI Skills That Last",
		body: [
			"Not all AI skills age at the same rate. A three-part framework helps project professionals build a portfolio of capabilities that compound over time.",
			"Perishable skills are tool-specific—how to use today's AI interface, how to navigate a particular model's quirks. These matter now but will be obsolete within 18 months as platforms evolve.",
			"Durable skills are methodology-based. Prompt engineering patterns, evaluation frameworks, and AI integration approaches tend to survive platform changes because they reflect how AI works, not just how a specific tool works.",
			"Enduring skills are human capabilities that AI cannot replicate: judgment, stakeholder communication, ethical reasoning, and creative synthesis. These compound over a career regardless of what the technology does.",
			"A smart AI learning strategy invests most heavily in the enduring, builds solid foundations in the durable, and treats the perishable as table stakes—necessary but not worth over-indexing on.",
		],
	},
	"how-pmi-nigeria-empowers-young-people-project-management-skills": {
		badge: "Blog",
		date: "2 June 2026",
		description:
			"Discover how PMI Nigeria Chapter and PMIEF are helping young people build confidence, leadership, and project management skills through impactful community training programs.",
		href: "/blog/how-pmi-nigeria-empowers-young-people-project-management-skills",
		image: "/images/blog/nigeria-impact.png",
		relatedSlugs: [
			"adaptive-capacity-ai-decision-making",
			"pmo-reinvention-leading-the-shift",
		],
		title:
			"How PMI Is Driving Social Impact by Empowering Young People in Nigeria",
		body: [
			"In Nigeria, the PMI Nigeria Chapter is doing more than advancing the project management profession. Through the Project Management Educational Foundation (PMIEF) and the Project Management Skills for Life® program, they are changing the trajectories of young people across the country.",
			"The program equips students and young adults with foundational project management skills—planning, communication, leadership, and problem-solving—that translate into greater confidence and employability across any field.",
			"What makes this initiative distinctive is its community-driven model. Dedicated volunteers from the PMI Nigeria Chapter deliver training in schools, community centers, and youth organizations, bringing professional-grade skills development to underserved communities.",
			"The impact is tangible. Participants report stronger self-confidence, clearer career direction, and a sense of possibility that extends well beyond any single training session. For many, it marks the first time they have encountered structured professional skills development.",
			"PMI's global network of chapters plays a critical role in delivering social impact at scale. The Nigeria story is one example of how local chapter energy, supported by PMIEF resources, can create lasting change in communities around the world.",
		],
	},
	"modular-prompting-better-ai-results-project-managers": {
		badge: "Blog",
		date: "20 May 2026",
		description:
			"Move beyond one-off prompts to more structured, reliable AI interactions. Reusable prompt structures improve decision-making, team alignment, and real-world project results.",
		href: "/blog/modular-prompting-better-ai-results-project-managers",
		image: "/images/blog/modular-prompting.jpg",
		relatedSlugs: [
			"ai-skills-perishable-durable-enduring",
			"adaptive-capacity-ai-decision-making",
		],
		title:
			"Modular Prompting in Practice: Better AI Results for Project Managers",
		body: [
			"One of the most common frustrations project managers report with AI tools is inconsistency. The same question produces different quality answers on different days. The solution, increasingly, is modular prompting.",
			"Modular prompts are structured templates that define the role, context, task, and output format before making a request. Instead of asking 'summarize the risks in this project,' a modular prompt specifies the lens (risk register), the audience (executive sponsor), and the format (three-bullet executive summary).",
			"The result is dramatically more consistent, usable output. More importantly, modular prompts can be reused across projects, shared across teams, and iterated over time—turning individual AI interactions into institutional knowledge.",
			"For project managers, the practical application is straightforward: start with your most frequent AI tasks (status updates, risk assessments, stakeholder communications), and develop a prompt template for each. Test, refine, and share.",
			"Teams that invest in prompt libraries are discovering that AI becomes significantly more valuable as a team tool when the prompts are structured, versioned, and shared. The barrier to adoption drops, consistency rises, and the time savings compound across the portfolio.",
		],
	},
	"how-to-build-a-resume-that-stands-out-for-project-roles": {
		badge: "Blog",
		date: "18 May 2026",
		description:
			"Learn how to strengthen your resume for project management roles with practical tips on summaries, keywords, certifications, and measurable results.",
		href: "/blog/how-to-build-a-resume-that-stands-out-for-project-roles",
		image: "/images/blog/build-resume.jpg",
		relatedSlugs: [
			"navigating-a-career-change-into-project-management",
			"how-to-negotiate-your-project-manager-salary",
		],
		title: "How to Build a Resume That Stands Out for Project Roles",
		body: [
			"In a competitive job market, a strong resume is your first filter. For project management roles specifically, there are four elements that consistently separate strong candidates from average ones.",
			"First, lead with measurable outcomes. Project managers are responsible for delivering results—so show results. 'Delivered $2.3M infrastructure upgrade 6% under budget and two weeks ahead of schedule' says more than 'managed complex projects.'",
			"Second, align your keywords with the job description. Most mid-to-large organizations use ATS software to screen resumes before a human sees them. Match the language used in the posting, especially for certifications (PMP®, CAPM®, PMI-ACP®) and methodologies (Agile, Scrum, Waterfall, hybrid).",
			"Third, your professional summary is prime real estate. Two to three sentences at the top of your resume that position your value proposition clearly can determine whether a recruiter reads on or moves to the next candidate.",
			"Finally, certifications matter—especially PMI certifications. But placement matters too. Listing PMP® after your name in the header or in a prominent certifications section signals immediate credibility to any hiring manager in the field.",
		],
	},
	"why-change-efforts-stall-bcg": {
		badge: "Blog",
		date: "13 May 2026",
		description:
			"Host Pierre Le Manh is joined by Julia Dhar of BCG to discuss why most change initiatives stall and how behavioral science can help.",
		href: "/blog/why-change-efforts-stall-bcg",
		image: "/images/blog/change-stall-bcg.jpg",
		relatedSlugs: [
			"pmo-reinvention-leading-the-shift",
			"adaptive-capacity-ai-decision-making",
		],
		title: "Why Change Efforts Stall BCG",
		body: [
			"Most organizational change initiatives don't fail because of poor strategy. They stall because of human behavior—specifically, the predictable patterns of resistance, ambiguity, and decision avoidance that emerge when people are asked to work differently.",
			"In this episode of The Shift Code Podcast, PMI CEO Pierre Le Manh sits down with Julia Dhar, Managing Director and Senior Partner at Boston Consulting Group, to explore the behavioral science of change adoption.",
			"Dhar's core argument: the problem is not that people resist change. The problem is that most change programs are designed as if resistance is a failure of logic, when it is actually a feature of how humans process uncertainty.",
			"The prescription is counterintuitive. Successful change programs reduce the cognitive load of the transition—they make the new way feel as familiar as possible as quickly as possible. That means investing heavily in the early adoption experience, not just the communication plan.",
			"For project managers and PMO leaders driving organizational transformation, the practical takeaway is clear: the design of the change experience matters as much as the design of the change itself. And the most important thing you can do is remove friction from the first steps.",
		],
	},
	"elevating-project-management-training": {
		badge: "Blog",
		date: "4 May 2026",
		description:
			"Explore how instructor-led PMP® training with a PMI® ATP helps learners build confidence, meet certification requirements, and prepare for long-term success.",
		href: "/blog/elevating-project-management-training",
		image: "/images/blog/pm-training.jpg",
		relatedSlugs: [
			"how-to-build-a-resume-that-stands-out-for-project-roles",
			"pmo-reinvention-leading-the-shift",
		],
		title: "Elevating Project Management Training",
		body: [
			"As PMP® certification continues to be one of the most recognized credentials in the global workforce, the quality of preparation has never mattered more. PMI® Authorized Training Partners (ATPs) are raising the bar.",
			"Instructor-led training through a PMI ATP offers something that self-study and online courses often cannot: structured guidance from practitioners who have applied what they are teaching in real environments.",
			"The best ATP programs are built around how adults learn: immediate application, scenario-based practice, and cohort accountability. Students don't just learn the PMBOK® framework in isolation—they practice applying it to real-world project scenarios in a supported environment.",
			"The outcome is measurable. Candidates who complete instructor-led ATP training consistently report higher confidence going into the exam and higher first-time pass rates than self-study candidates.",
			"For organizations investing in project management capability, ATP partnerships deliver additional value: customized content, team cohorts that build shared language, and post-certification support that helps newly certified professionals apply their skills immediately.",
		],
	},
	"how-award-winning-pmos-drive-business-transformation": {
		badge: "Blog",
		date: "9 May 2025",
		description:
			"Learn how top PMOs drive business transformation through strategic partnership, agile integration, digital transformation, and more.",
		href: "/blog/how-award-winning-pmos-drive-business-transformation",
		relatedSlugs: [
			"pmo-reinvention-leading-the-shift",
			"managing-perceptions-for-project-success",
		],
		title: "How Top PMOs Drive Business Transformation",
		body: [
			"The most successful PMOs share a common trait: they don't see themselves as project monitors. They see themselves as business transformation partners.",
			"In our analysis of award-winning PMOs across industries, three capabilities consistently set high-performers apart from the rest: strategic alignment, agile integration, and digital fluency.",
			"Strategic alignment means the PMO portfolio is directly tied to enterprise priorities—not just a collection of approved projects. Award-winning PMOs have formal mechanisms for connecting work to strategy and actively redirecting resources when strategic priorities shift.",
			"Agile integration means the PMO has evolved beyond waterfall governance to support hybrid and agile delivery models. This is not just about adopting Scrum—it is about creating governance structures that enable velocity rather than slow it down.",
			"Digital fluency means the PMO is using data to make decisions. Dashboards, portfolio analytics, and AI-assisted forecasting are becoming table stakes for high-performing PMOs that want to maintain credibility with executive stakeholders.",
		],
	},
	"managing-perceptions-for-project-success": {
		badge: "Blog",
		date: "8 April 2025",
		description:
			"Project success isn't just about metrics—stakeholder perceptions shape whether a project is seen as valuable. Learn how to manage and align perceptions for better outcomes.",
		href: "/blog/managing-perceptions-for-project-success",
		relatedSlugs: [
			"how-award-winning-pmos-drive-business-transformation",
			"run-an-effective-status-meeting",
		],
		title: "Managing Perceptions for Project Success",
		body: [
			"A project can meet every metric and still be perceived as a failure. Conversely, a project that misses its original timeline can be celebrated as a success. The difference, in both cases, is perception management.",
			"Stakeholder perceptions are not irrational. They are formed from a combination of lived experience, communication quality, and alignment between expectation and reality. Project managers who understand this dynamic can shape them proactively rather than responding to them reactively.",
			"The most powerful tool in perception management is narrative. What story are you telling about the project—its purpose, its progress, and its impact? A clear, consistent narrative told at the right cadence to the right audiences does more for project credibility than any status report.",
			"Regular checkpoints with key stakeholders—not just formal updates—create opportunities to surface misalignment before it hardens into opposition. Ask what concerns they are not voicing. Make it easy for them to be candid.",
			"Finally, when things go wrong (and they will), own the narrative immediately. Stakeholders are more forgiving of setbacks they understand than surprises they had to discover on their own.",
		],
	},
	"manage-risk-and-maximize-reward": {
		badge: "Blog",
		date: "10 June 2024",
		description:
			"No project runs exactly to plan, but a strong risk management approach will help project teams navigate the challenges and maximize rewards.",
		href: "/blog/manage-risk-and-maximize-reward",
		relatedSlugs: [
			"managing-perceptions-for-project-success",
			"run-an-effective-status-meeting",
		],
		title: "5 Ways to Manage Risk and Maximize Rewards",
		body: [
			"Risk is inherent to every project. The question is not whether risks will materialize, but whether your team is prepared to handle them when they do.",
			"First, shift from risk avoidance to risk management. The goal is not to eliminate risk—that is impossible—but to understand it well enough to make informed decisions about how much to accept and how much to mitigate.",
			"Second, treat risk identification as a team sport. The risks your team surfaces in a structured brainstorm will be more comprehensive and more accurate than anything a single project manager can produce alone.",
			"Third, quantify where you can. Risks expressed as probabilities and impact estimates are far more actionable than risks described as 'high,' 'medium,' or 'low.'",
			"Fourth, build response plans before you need them. A risk that has a pre-approved response plan can be executed quickly with minimal disruption. A risk that requires escalation every time it activates will slow your project down.",
			"Fifth, revisit your risk register regularly. The risk landscape changes as projects progress. Build risk reviews into your cadence so the register reflects reality rather than the assumptions from kickoff.",
		],
	},
	"run-an-effective-status-meeting": {
		badge: "Blog",
		date: "25 September 2024",
		description:
			"Status meetings are how project leaders keep their fingers on the pulse. Here's some time-tested advice to get your status meetings beating to a unified purpose.",
		href: "/blog/run-an-effective-status-meeting",
		relatedSlugs: [
			"managing-perceptions-for-project-success",
			"manage-risk-and-maximize-reward",
		],
		title: "How to Run a Better Status Meeting",
		body: [
			"Status meetings have a bad reputation—often deserved. Most run too long, cover the wrong things, and leave participants wondering why they couldn't have received the same information by email.",
			"The root cause is almost always the same: the meeting is structured around reporting rather than decision-making. When every attendee takes a turn recounting what they worked on last week, the meeting becomes a serial download that serves no one.",
			"Effective status meetings are built around a different question: what decisions need to be made today, and who needs to be in the room to make them? Everything else can be communicated asynchronously.",
			"Before each meeting, the project manager should identify two to three decision items or escalation points. These become the agenda. Status updates flow around them, not the other way around.",
			"Keep them short. A well-run 20-minute status meeting that resolves a blocker is worth more than a 60-minute comprehensive update that requires a follow-up meeting to make the decisions.",
		],
	},
	"navigating-a-career-change-into-project-management": {
		badge: "Blog",
		date: "12 April 2026",
		description:
			"Thinking about making the leap into project management? Explore the skills you need, the certifications that matter, and how to make a confident transition.",
		href: "/blog/navigating-a-career-change-into-project-management",
		relatedSlugs: [
			"how-to-build-a-resume-that-stands-out-for-project-roles",
			"elevating-project-management-training",
		],
		title: "Navigating a Career Change into Project Management",
		body: [
			"Project management is one of the most accessible profession transitions for people coming from a wide range of backgrounds. If you have been coordinating work, managing stakeholders, or delivering outcomes in any capacity, you already have transferable foundation.",
			"The first step is identifying your existing skills through a project management lens. Communication, planning, budget awareness, and risk judgment are all project management competencies—even if you have never held the job title.",
			"Certifications accelerate the transition significantly. The CAPM® is specifically designed for people entering the profession, and can be earned while you are still in your current role. For those with three or more years of experience leading projects, the PMP® signals immediate credibility to hiring managers.",
			"Your first PM role will likely come through adjacency—moving into a project coordinator or associate PM position in an industry where you already have domain knowledge. Use that domain expertise as a differentiator, not a liability.",
			"The project management career path rewards continuous learning. Every credential you earn, every methodology you add, and every project you deliver compounds into a professional profile that becomes increasingly valuable over time.",
		],
	},
	"how-to-negotiate-your-project-manager-salary": {
		badge: "Blog",
		date: "28 February 2026",
		description:
			"Salary negotiations can feel daunting, but project managers who advocate for themselves earn significantly more. Here's how to approach the conversation.",
		href: "/blog/how-to-negotiate-your-project-manager-salary",
		relatedSlugs: [
			"how-to-build-a-resume-that-stands-out-for-project-roles",
			"navigating-a-career-change-into-project-management",
		],
		title: "How to Negotiate Your Project Manager Salary",
		body: [
			"PMI's Earning Power salary survey consistently finds that project managers who negotiate their compensation earn more—sometimes significantly more—than those who accept initial offers. The skill is worth developing.",
			"Start with data. The PMI Earning Power Salary Survey provides benchmarks by certification level, geography, and industry. Walking into a negotiation without knowing your market rate is like negotiating a project budget without knowing the scope.",
			"Frame the conversation around value delivered, not years of experience. Employers pay for outcomes. If you can quantify the business impact of projects you have delivered—cost savings, revenue growth, risk avoided—you have a far stronger negotiating position than a tenure-based argument.",
			"Don't anchor too early. Let the employer make the first offer when possible. If asked for a number, provide a range—and make the bottom of your range your actual target.",
			"Total compensation matters. Base salary is one component. Benefits, remote flexibility, professional development budgets, and bonus structures all contribute to total value. If base is fixed, negotiate the package.",
		],
	},
	"strategy-only-matters-if-teams-can-execute-together": {
		badge: "Blog",
		date: "1 May 2026",
		description:
			"Across industries, organizations that deliver consistently invest in shared language, governance, and project leadership capability so teams can move faster without losing alignment.",
		href: "/blog/strategy-only-matters-if-teams-can-execute-together",
		image: "/images/blog/strategy-execute-together.jpg",
		relatedSlugs: [
			"pmo-reinvention-leading-the-shift",
			"enterprise-agility-transformation-leadership",
		],
		title: "Strategy Only Matters If Your Teams Can Execute Together",
		body: [
			"Every organization has a strategy. Far fewer have the organizational capability to execute it consistently—at the team level, across functions, and at scale. That gap is where competitive advantage is won or lost.",
			"Across industries, organizations that deliver consistently share three traits: a shared language for how work gets done, a governance model that enables rather than slows execution, and project leadership capability distributed throughout the workforce—not just in a dedicated PMO.",
			"Shared language is more powerful than it sounds. When teams across functions use the same terms for scope, risk, and stakeholder engagement, handoffs accelerate, escalations decrease, and decisions happen closer to the work. It is the connective tissue of organizational execution.",
			"Governance, done well, is not bureaucracy. It is the set of decisions about who has authority to approve what, how priorities get set when resources compete, and how performance gets measured. Organizations that invest in clear, lightweight governance execute faster than those with ad-hoc decision-making.",
			"Project leadership capability is the multiplier. When individual contributors understand how to scope work, manage stakeholders, and navigate complexity—not just project managers—the whole organization moves faster. Strategy only matters if your teams can execute together. Building that capability is the work.",
		],
	},
	"pmp-exam-change": {
		badge: "Blog",
		date: "20 April 2026",
		description:
			"The PMP exam changes on 9 July 2026, with updated prep resources available from 14 April. Learn what's changing, why it matters, and how to choose the right version based on your timeline.",
		href: "/blog/pmp-exam-change",
		image: "/images/blog/pmp-exam-change.jpg",
		relatedSlugs: ["pmp-certification", "pmp-exam-study-strategies"],
		title: "PMP Exam Change",
		body: [
			"The PMP® exam is changing on 9 July 2026. Updated prep resources—including a new Examination Content Outline (ECO), updated practice exams, and revised study guides—became available on 14 April 2026.",
			"The core structure of the exam is not changing. The PMP continues to test predictive, agile, and hybrid approaches to project management, and the mix will remain consistent. What is changing is the specific content domains, tasks, and enablers that structure the questions.",
			"For candidates currently in preparation: if you are scheduled to sit the exam before 9 July, continue studying with your current materials. If you are scheduled on or after 9 July, transition to the updated ECO and new prep resources now.",
			"For those just starting: begin with the updated materials from 14 April. The updated ECO reflects how project management is actually practiced today—with increased emphasis on adaptive approaches, AI-enabled work, and stakeholder-driven value delivery.",
			"PMI will continue to offer the PMP in both online proctored and in-person testing center formats. The passing standard remains aligned to industry benchmarks. Start your preparation with the official PMI Exam Prep resources to ensure you are studying to the current standard.",
		],
	},
	"pmp-certification": {
		badge: "Blog",
		date: "13 April 2026",
		description:
			"Thinking about pursuing PMP certification? This guide covers what the PMP represents, who it's designed for, and how to decide if the timing is right for your career.",
		href: "/blog/pmp-certification",
		image: "/images/blog/pmp-certification.jpg",
		relatedSlugs: ["pmp-exam-change", "pmp-exam-study-strategies"],
		title: "Is PMP Certification Right for You?",
		body: [
			"The Project Management Professional (PMP)® certification is the most widely recognized credential in the project management field. It signals to employers that you have the experience, education, and demonstrated competency to lead projects—and that you have validated that capability through a rigorous, independent assessment.",
			"But is it right for you? The PMP is designed for professionals who are already leading projects. The eligibility requirements reflect this: a secondary degree (high school diploma or equivalent) requires five years of project experience; a four-year degree requires three years. In both cases, 35 hours of project management education are required.",
			"The credential is field-agnostic. PMPs work in technology, construction, healthcare, finance, government, and manufacturing. If your work involves scoping, scheduling, stakeholder management, and delivering outcomes—in any industry—the PMP applies.",
			"The timing question is individual. The credential is most valuable when you are actively leading projects and can immediately apply what you have studied. Pursuing it early in a project management career—when the experience requirement is barely met—often leads to lower pass rates and less practical benefit than waiting until the credential reflects genuine day-to-day practice.",
			"If you meet the eligibility requirements and are regularly leading projects, the PMP is likely worth the investment. PMI's Earning Power salary survey consistently finds that PMP holders earn more than non-certified peers—the premium varies by market, but the pattern is consistent globally.",
		],
	},
	"best-pmi-events": {
		badge: "Blog",
		date: "10 April 2026",
		description:
			"This guide highlights the top events for project managers in 2026 from PMI, including virtual and in-person experiences designed to help professionals expand their networks and build future-ready skills.",
		href: "/blog/best-pmi-events",
		image: "/images/blog/best-pmi-events.jpg",
		relatedSlugs: [
			"pmp-certification",
			"elevating-project-management-training",
		],
		title: "Best PMI Events 2026",
		body: [
			"2026 is a strong year for project management professionals looking to connect, learn, and grow. PMI's event calendar spans virtual and in-person formats, regional and global scale, and beginner through executive audiences.",
			"PMXPO™ is PMI's flagship virtual event—free for PMI members, open to all at a low cost. It delivers keynotes, panels, and breakout sessions across the full spectrum of project management practice, with PDUs included. In 2026, it features a dedicated AI and project management track.",
			"PMI® Global Summit is the premier in-person gathering for project leaders worldwide. Held in the fall, it brings together thousands of practitioners, executives, and thought leaders for three days of programming, networking, and certification-related sessions. Early registration is available now.",
			"Regional events—offered by PMI chapters across North America, Europe, the Middle East, Africa, and Asia Pacific—provide more accessible, locally relevant programming throughout the year. Check your local chapter calendar for workshops, chapter conferences, and community events.",
			"For organizations looking to develop teams, PMI also offers customized group learning experiences and private event formats. Whether you attend solo or bring a team, 2026 offers more opportunities than ever to invest in your professional development through PMI.",
		],
	},
	"enterprise-agility-transformation-leadership": {
		badge: "Blog",
		date: "3 April 2026",
		description:
			"The gap between leadership decisions and organizational reality is where transformations break down. PMI's Manifesto for Enterprise Agility provides four leadership values that close the gap.",
		href: "/blog/enterprise-agility-transformation-leadership",
		image: "/images/blog/enterprise-agility.png",
		relatedSlugs: [
			"strategy-only-matters-if-teams-can-execute-together",
			"pmo-reinvention-leading-the-shift",
		],
		title: "The Manifesto for Enterprise Agility",
		body: [
			"Most transformations are not defeated by bad strategy. They are defeated by the gap between what leadership decides and what the organization can actually do. Boston Consulting Group calls this gap 'change distance'—and it is where transformation dollars go to die.",
			"PMI's Manifesto for Enterprise Agility is a response to this dynamic. It articulates four leadership values that, when practiced consistently, close the gap between strategic intent and organizational execution.",
			"The first value is purpose over process. Organizations that execute well keep the 'why' visible at every level of the work. Process serves purpose; when it stops doing that, it should be changed.",
			"The second is people over plans. Plans are hypotheses. The people doing the work have information that no plan captures. Agile enterprises invest in the judgment of their workforce, not just the accuracy of their forecasts.",
			"The third is outcomes over output. Measuring activity is easy. Measuring value delivered is harder and more important. Agile enterprises build feedback loops that connect work to results—not just completion.",
			"The fourth is learning over execution. In complex environments, the ability to learn and adapt faster than the competition is the durable advantage. Organizations that treat every project as a learning opportunity compound their capability over time.",
		],
	},
	"how-project-skills-led-student-to-caltech": {
		badge: "Blog",
		date: "27 March 2026",
		description:
			"Early exposure to project management skills can shape students' future success. Learn how one student developed these skills through the PMI Educational Foundation, leading to success at Caltech and a NASA mission project.",
		href: "/blog/how-project-skills-led-student-to-caltech",
		image: "/images/blog/project-skills-caltech.png",
		relatedSlugs: [
			"how-pmi-nigeria-empowers-young-people-project-management-skills",
			"elevating-project-management-training",
		],
		title: "Project Skills for Student Success",
		body: [
			"When students learn to break a large goal into smaller tasks, manage their time, and communicate progress to stakeholders, they are not just completing a school project. They are building a cognitive toolkit that compounds over a lifetime.",
			"The PMI Educational Foundation (PMIEF) has been building that toolkit for students around the world through the Project Management Skills for Life® program. The program brings project management fundamentals into classrooms and youth organizations, often reaching students who would not otherwise encounter structured professional skills development.",
			"One participant's story illustrates the impact. After completing a PMIEF program in high school, the student went on to study engineering at Caltech—and then contributed to a NASA mission project as an undergraduate. The skills developed through the program—planning under constraints, communicating with diverse stakeholders, managing uncertainty—turned out to be as important as the technical knowledge.",
			"Project-based learning works because it is applied. Students do not just read about project management—they practice it on problems they care about. That active learning creates retention and confidence that passive instruction cannot replicate.",
			"PMI believes that project skills are life skills. Investing in early exposure—through teachers, community programs, and youth organizations—creates a ripple effect that benefits students, communities, and the organizations they eventually join.",
		],
	},
	"ge-vernova-powering-growth-decarbonizing-world": {
		badge: "Blog",
		date: "26 March 2026",
		description:
			'In this episode of "The Shift Code" podcast, host Pierre Le Manh is joined by Roger Martella of GE Vernova to unpack a practical approach to transformation.',
		href: "/blog/ge-vernova-powering-growth-decarbonizing-world",
		image: "/images/blog/ge-vernova.png",
		relatedSlugs: [
			"why-change-efforts-stall-bcg",
			"enterprise-agility-transformation-leadership",
		],
		title: "How GE Vernova Is Powering Growth in a Decarbonizing World",
		body: [
			"The energy transition is the largest infrastructure project in human history. Companies like GE Vernova are at the center of it—building the turbines, grids, and software that will power a decarbonized world while simultaneously transforming their own organizations to compete in a rapidly changing market.",
			"In this episode of The Shift Code podcast, PMI CEO Pierre Le Manh sits down with Roger Martella, Executive Vice President & Chief Corporate Officer at GE Vernova, to discuss how the company is navigating that dual challenge.",
			"Martella's core insight is deceptively simple: you cannot move fast unless you are simple. GE Vernova's transformation playbook begins with simplification—removing layers, reducing complexity, and getting clear on what the organization actually does and why. Complexity is the enemy of execution speed.",
			"The second principle is incentive alignment. Transformation rhetoric without incentive change produces cynicism. GE Vernova invested heavily in aligning what people are rewarded for with the behaviors the transformation requires. That alignment, Martella argues, is what converts strategy into sustained action.",
			"The third is patience with results. Transformations take time—often longer than the business cycle that prompted them. Leaders who stay disciplined when early results are ambiguous, and who resist the temptation to declare victory or pivot prematurely, are the ones whose transformations actually land.",
		],
	},
	"pmp-exam-study-strategies": {
		badge: "Blog",
		date: "17 March 2026",
		description:
			"Preparing for the PMP exam takes more than memorization. Certified project professionals share study strategies, preparation tips, and recommended resources.",
		href: "/blog/pmp-exam-study-strategies",
		image: "/images/blog/pmp-exam-study.jpg",
		relatedSlugs: ["pmp-exam-change", "pmp-certification"],
		title: "PMP Exam Study Strategies from Certified PMs",
		body: [
			"The PMP exam is not a test of memorization. It tests judgment—specifically, your ability to apply project management principles to realistic scenarios where more than one answer might seem correct. Study strategies that worked for knowledge-based exams often do not transfer.",
			"Certified PMs who have passed recently share a consistent set of recommendations. First: study the Examination Content Outline (ECO) before anything else. The ECO defines what the exam actually covers. Everything else—courses, books, practice exams—should be evaluated against it.",
			"Second: practice exams are non-negotiable, but quality matters more than quantity. Work through questions from PMI's official practice resources and from ATP-aligned providers. When you get a question wrong, understand why—not just what the right answer is, but what reasoning pattern the question was testing.",
			"Third: build a study plan and treat it like a project. Set a target exam date, work backwards, and allocate specific time each week to each domain. Candidates who study consistently over 8–12 weeks outperform those who cram in the final two weeks.",
			"Finally, use a study group or accountability partner if possible. The conversations that happen when you explain a concept to someone else are often where real understanding solidifies. Many PMI chapters offer study groups specifically for PMP candidates—they are worth finding.",
		],
	},
};

/* ─────────────────── topic archive data ─────────────────── */

interface TopicData {
	description: string;
	label: string;
	posts: BlogPost[];
}

const TOPICS: Record<string, TopicData> = {
	"project-management-playbook": {
		label: "Project Management Playbook",
		description:
			"Practical guides, frameworks, and evidence-based advice to help project leaders deliver with confidence.",
		posts: [
			{
				badge: "Blog",
				date: "9 May 2025",
				description:
					"Learn how top PMOs drive business transformation through strategic partnership, agile integration, digital transformation, and more.",
				href: "/blog/how-award-winning-pmos-drive-business-transformation",
				title: "How Top PMOs Drive Business Transformation",
			},
			{
				badge: "Blog",
				date: "8 April 2025",
				description:
					"Project success isn't just about metrics—stakeholder perceptions shape whether a project is seen as valuable. Learn how to manage and align perceptions for better outcomes.",
				href: "/blog/managing-perceptions-for-project-success",
				title: "Managing Perceptions for Project Success",
			},
			{
				badge: "Blog",
				date: "10 June 2024",
				description:
					"No project runs exactly to plan, but a strong risk management approach will help project teams navigate the challenges and maximize rewards.",
				href: "/blog/manage-risk-and-maximize-reward",
				title: "5 Ways to Manage Risk and Maximize Rewards",
			},
			{
				badge: "Blog",
				date: "25 September 2024",
				description:
					"Status meetings are how project leaders keep their fingers on the pulse. Here's some time-tested advice to get your status meetings beating to a unified purpose.",
				href: "/blog/run-an-effective-status-meeting",
				title: "How to Run a Better Status Meeting",
			},
			{
				badge: "Blog",
				date: "9 June 2026",
				description:
					"As complexity rises, organizations need more than project oversight. They need PMO capability that connects strategy to execution and delivers business value at scale.",
				href: "/blog/pmo-reinvention-leading-the-shift",
				image: "/images/blog/pmo-reinvention.jpg",
				title: "PMO Reinvention: Leading the Shift",
			},
			{
				badge: "Blog",
				date: "24 June 2026",
				description:
					"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
				href: "/blog/adaptive-capacity-ai-decision-making",
				image: "/images/blog/adaptive-capacity.jpg",
				title: "Judgment Builds Adaptive Capacity",
			},
		],
	},
	"career-advancement": {
		label: "Career Advancement",
		description:
			"Resources, strategies, and guidance to help project professionals grow their careers and increase their earning power.",
		posts: [
			{
				badge: "Blog",
				date: "18 May 2026",
				description:
					"Learn how to strengthen your resume for project management roles with practical tips on summaries, keywords, certifications, and measurable results.",
				href: "/blog/how-to-build-a-resume-that-stands-out-for-project-roles",
				image: "/images/blog/build-resume.jpg",
				title: "How to Build a Resume That Stands Out for Project Roles",
			},
			{
				badge: "Blog",
				date: "12 April 2026",
				description:
					"Thinking about making the leap into project management? Explore the skills you need, the certifications that matter, and how to make a confident transition.",
				href: "/blog/navigating-a-career-change-into-project-management",
				title: "Navigating a Career Change into Project Management",
			},
			{
				badge: "Blog",
				date: "28 February 2026",
				description:
					"Salary negotiations can feel daunting, but project managers who advocate for themselves earn significantly more. Here's how to approach the conversation.",
				href: "/blog/how-to-negotiate-your-project-manager-salary",
				title: "How to Negotiate Your Project Manager Salary",
			},
			{
				badge: "Blog",
				date: "15 January 2026",
				description:
					"Your personal brand is what people say about you when you leave the room. Learn how to shape your professional reputation in the project management field.",
				href: "/blog/building-a-personal-brand-as-a-project-professional",
				title: "Building a Personal Brand as a Project Professional",
			},
			{
				badge: "Blog",
				date: "4 May 2026",
				description:
					"Explore how instructor-led PMP® training with a PMI® ATP helps learners build confidence, meet certification requirements, and prepare for long-term success.",
				href: "/blog/elevating-project-management-training",
				image: "/images/blog/pm-training.jpg",
				title: "Elevating Project Management Training",
			},
		],
	},
	"project-inspiration": {
		label: "Project Inspiration",
		description:
			"Stories, perspectives, and ideas that inspire project professionals to think differently about their work and their impact.",
		posts: [
			{
				badge: "Blog",
				date: "2 June 2026",
				description:
					"Discover how PMI Nigeria Chapter and PMIEF are helping young people build confidence, leadership, and project management skills.",
				href: "/blog/how-pmi-nigeria-empowers-young-people-project-management-skills",
				image: "/images/blog/nigeria-impact.png",
				title:
					"How PMI Is Driving Social Impact by Empowering Young People in Nigeria",
			},
			{
				badge: "Blog",
				date: "5 May 2026",
				description:
					"Servant leaders create high-performing agile teams by putting people first. Discover how this leadership style drives engagement, trust, and results.",
				href: "/blog/power-of-servant-leadership-in-agile-teams",
				title: "The Power of Servant Leadership in Agile Teams",
			},
			{
				badge: "Blog",
				date: "22 March 2026",
				description:
					"In complex projects, simplicity is not a shortcut—it's a strategic advantage. Learn how to cut noise and focus your team on what truly drives value.",
				href: "/blog/when-simplicity-is-the-strategy",
				title: "When Simplicity Is the Strategy",
			},
			{
				badge: "Blog",
				date: "10 February 2026",
				description:
					"Uncertainty is constant in project work. Discover proven techniques that help project leaders keep their teams motivated, aligned, and moving forward.",
				href: "/blog/how-to-keep-your-team-motivated-through-uncertainty",
				title: "How to Keep Your Team Motivated Through Uncertainty",
			},
			{
				badge: "Blog",
				date: "4 January 2026",
				description:
					"Effective stakeholder communication can make or break a project. Explore frameworks and practices that help you align stakeholders from kickoff to close.",
				href: "/blog/the-art-of-stakeholder-communication",
				title: "The Art of Stakeholder Communication",
			},
		],
	},
	"pmi-x-ai": {
		label: "PMIxAI",
		description:
			"How artificial intelligence is reshaping project management—and what project professionals need to know to lead in the AI era.",
		posts: [
			{
				badge: "Blog",
				date: "5 June 2026",
				description:
					"Build skills for artificial intelligence by balancing fast-changing tools, durable methods and human capabilities that compound over time.",
				href: "/blog/ai-skills-perishable-durable-enduring",
				image: "/images/blog/ai-skills.jpg",
				title: "Build AI Skills That Last",
			},
			{
				badge: "Blog",
				date: "20 May 2026",
				description:
					"Move beyond one-off prompts to more structured, reliable AI interactions. Reusable prompt structures improve decision-making, team alignment, and real-world project results.",
				href: "/blog/modular-prompting-better-ai-results-project-managers",
				image: "/images/blog/modular-prompting.jpg",
				title:
					"Modular Prompting in Practice: Better AI Results for Project Managers",
			},
			{
				badge: "Blog",
				date: "24 June 2026",
				description:
					"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
				href: "/blog/adaptive-capacity-ai-decision-making",
				image: "/images/blog/adaptive-capacity.jpg",
				title: "Judgment Builds Adaptive Capacity",
			},
			{
				badge: "Blog",
				date: "3 April 2026",
				description:
					"AI is reshaping how project teams identify, assess, and respond to risk. Discover how to integrate AI tools into your risk management practice.",
				href: "/blog/how-ai-is-changing-risk-management",
				title: "How AI Is Changing Risk Management",
			},
			{
				badge: "Blog",
				date: "14 March 2026",
				description:
					"Project managers are uniquely positioned to lead AI implementation in organizations. Here's how to embrace the role of AI champion on your team.",
				href: "/blog/project-managers-as-ai-champions",
				title: "Project Managers as AI Champions",
			},
		],
	},
	"leader-insight": {
		label: "Leader Insight",
		description:
			"Perspectives from leading thinkers in the project management field on the trends, challenges, and opportunities shaping the profession.",
		posts: [
			{
				badge: "Blog",
				date: "24 June 2026",
				description:
					"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
				href: "/blog/adaptive-capacity-ai-decision-making",
				image: "/images/blog/adaptive-capacity.jpg",
				title: "Judgment Builds Adaptive Capacity",
			},
			{
				badge: "Blog",
				date: "9 June 2026",
				description:
					"As complexity rises, organizations need more than project oversight. They need PMO capability that connects strategy to execution and delivers business value at scale.",
				href: "/blog/pmo-reinvention-leading-the-shift",
				image: "/images/blog/pmo-reinvention.jpg",
				title: "PMO Reinvention: Leading the Shift",
			},
			{
				badge: "Blog",
				date: "13 May 2026",
				description:
					"In this episode of The Shift Code Podcast, host Pierre Le Manh is joined by Julia Dhar of BCG to discuss why most change initiatives stall.",
				href: "/blog/why-change-efforts-stall-bcg",
				image: "/images/blog/change-stall-bcg.jpg",
				title: "Why Change Efforts Stall",
			},
			{
				badge: "Blog",
				date: "1 March 2026",
				description:
					"The most effective PMOs act as strategic partners, not just project monitors. Discover what separates a strategic PMO from an administrative one.",
				href: "/blog/the-strategic-pmo",
				title: "The Strategic PMO",
			},
		],
	},
};

/* ─────────────────── shared UI components ─────────────────── */

function HalfCard({ post }: { post: BlogPost }) {
	return (
		<div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#200f3b]/20 p-6">
			<div>
				<span className="mb-4 inline-block rounded-full border border-[#200f3b]/40 px-3 py-1 font-medium text-[#200f3b] text-xs">
					{post.badge}
				</span>
				{post.image && (
					<div className="mb-4 overflow-hidden rounded-xl">
						<img
							alt={post.title}
							className="h-40 w-full object-cover"
							height={320}
							src={post.image}
							width={640}
						/>
					</div>
				)}
				<h3 className="mb-2 font-bold text-[#200f3b] text-lg leading-snug">
					{post.title}
				</h3>
				<p className="mb-1 font-bold text-[#200f3b] text-sm">{post.date}</p>
				<p className="line-clamp-3 text-gray-600 text-sm leading-relaxed">
					{post.description}
				</p>
			</div>
			<Link
				className="inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2.5 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
				to={post.href as never}
			>
				Read Post
				<IconArrowRight className="size-4" />
			</Link>
		</div>
	);
}

/* ─────────────────── topic archive page ─────────────────── */

function TopicPage({ topic }: { topic: TopicData }) {
	return (
		<main className="overflow-x-hidden">
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-7xl px-6 pt-10 lg:px-4 lg:pt-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/blog/" />}
								>
									The PMI Blog
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-[#200f3b]">
									{topic.label}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-4xl px-6 pt-12 pb-14 text-center sm:pt-16">
					<span className="mb-4 inline-block rounded-full border border-[#200f3b]/40 px-4 py-1 font-medium text-[#200f3b] text-sm">
						Topic
					</span>
					<h1 className="mb-4 font-bold text-3xl text-[#200f3b] sm:text-4xl lg:text-5xl">
						{topic.label}
					</h1>
					<p className="mx-auto max-w-xl text-[#200f3b]/70 text-base leading-7 sm:text-lg">
						{topic.description}
					</p>
				</div>
			</section>

			<section className="bg-white py-14 lg:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-4">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{topic.posts.map((post) => (
							<HalfCard key={post.title} post={post} />
						))}
					</div>
					<div className="mt-10">
						<Link
							className="inline-flex items-center gap-2 font-semibold text-[#200f3b] text-sm hover:underline"
							to="/blog/"
						>
							<IconArrowLeft className="size-4" />
							Back to The PMI Blog
						</Link>
					</div>
				</div>
			</section>

			<section style={{ background: "#200f3b" }}>
				<div className="mx-auto max-w-2xl px-6 py-14 text-center lg:px-4 lg:py-20">
					<h2 className="mb-4 font-bold text-2xl text-white sm:text-3xl">
						Ready to join PMI?
					</h2>
					<p className="mx-auto mb-8 max-w-xl text-sm text-white/75 leading-7">
						Unlock members-only access to career-long learning, project
						resources, and our global community.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#200f3b] text-sm transition hover:bg-white/90"
						resetScroll
						to="/membership"
					>
						Become a Member
						<IconArrowRight className="size-4" />
					</Link>
				</div>
			</section>
		</main>
	);
}

/* ─────────────────── route component ─────────────────── */

function RouteComponent() {
	const { slug } = Route.useParams();

	const topic = TOPICS[slug];
	if (topic) {
		return <TopicPage topic={topic} />;
	}

	const post = POSTS[slug];

	if (!post) {
		return (
			<div
				className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
				style={{ background: "#f5f0e8" }}
			>
				<p className="mb-4 font-bold text-6xl text-[#200f3b]/20">404</p>
				<h1 className="mb-4 font-bold text-2xl text-[#200f3b]">
					Post not found
				</h1>
				<p className="mb-8 text-gray-600">
					This article doesn't exist or may have moved.
				</p>
				<Link
					className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
					to="/blog/"
				>
					<IconArrowLeft className="size-4" />
					Back to The PMI Blog
				</Link>
			</div>
		);
	}

	const relatedPosts = post.relatedSlugs
		.map((s) => POSTS[s])
		.filter(Boolean) as PostData[];

	return (
		<main className="overflow-x-hidden">
			{/* ── Hero ── */}
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-7xl px-6 pt-10 lg:px-4 lg:pt-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/blog/" />}
								>
									The PMI Blog
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbPage className="line-clamp-1 text-[#200f3b]">
									{post.title}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-3xl px-6 pt-10 pb-12 lg:px-4 lg:pt-14">
					<span className="mb-5 inline-block rounded-full border border-[#200f3b]/40 px-4 py-1 font-medium text-[#200f3b] text-sm">
						{post.badge}
					</span>
					<h1 className="mb-5 font-bold text-3xl text-[#200f3b] leading-tight sm:text-4xl lg:text-5xl">
						{post.title}
					</h1>
					<p className="mb-2 font-bold text-[#200f3b] text-sm">{post.date}</p>
					<p className="text-base text-gray-600 leading-relaxed sm:text-lg">
						{post.description}
					</p>
				</div>
			</section>

			{/* ── Hero Image ── */}
			{post.image && (
				<div className="mx-auto max-w-7xl px-6 lg:px-4">
					<div className="-mt-4 overflow-hidden rounded-2xl">
						<img
							alt={post.title}
							className="h-64 w-full object-cover sm:h-80 lg:h-112"
							height={640}
							src={post.image}
							width={1280}
						/>
					</div>
				</div>
			)}

			{/* ── Article Body ── */}
			<section className="bg-white py-14 lg:py-20">
				<div className="mx-auto max-w-3xl px-6 lg:px-4">
					<div className="space-y-6">
						{post.body.map((paragraph, i) => (
							<p
								className="text-base text-gray-700 leading-relaxed lg:text-lg"
								// biome-ignore lint/suspicious/noArrayIndexKey: static ordered paragraphs
								key={i}
							>
								{paragraph}
							</p>
						))}
					</div>
					<div className="mt-12 border-gray-200 border-t pt-8">
						<Link
							className="inline-flex items-center gap-2 font-semibold text-[#200f3b] text-sm hover:underline"
							to="/blog/"
						>
							<IconArrowLeft className="size-4" />
							Back to The PMI Blog
						</Link>
					</div>
				</div>
			</section>

			{/* ── Related Posts ── */}
			{relatedPosts.length > 0 && (
				<section className="py-14 lg:py-20" style={{ background: "#f5f0e8" }}>
					<div className="mx-auto max-w-7xl px-6 lg:px-4">
						<h2 className="mb-8 font-bold text-[#200f3b] text-xl sm:text-2xl">
							Related Posts
						</h2>
						<div className="grid gap-5 sm:grid-cols-2">
							{relatedPosts.map((related) => (
								<HalfCard key={related.title} post={related} />
							))}
						</div>
					</div>
				</section>
			)}

			{/* ── Membership CTA ── */}
			<section style={{ background: "#200f3b" }}>
				<div className="mx-auto max-w-2xl px-6 py-14 text-center lg:px-4 lg:py-20">
					<h2 className="mb-4 font-bold text-2xl text-white sm:text-3xl">
						Ready to join PMI?
					</h2>
					<p className="mx-auto mb-8 max-w-xl text-sm text-white/75 leading-7">
						Unlock members-only access to career-long learning, project
						resources, and our global community.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#200f3b] text-sm transition hover:bg-white/90"
						resetScroll
						to="/membership"
					>
						Become a Member
						<IconArrowRight className="size-4" />
					</Link>
				</div>
			</section>
		</main>
	);
}
