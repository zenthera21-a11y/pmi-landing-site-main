import { Button } from "@pmi-south-asia/ui/components/button";
import { IconChevronDown, IconExternalLink } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const FOOTER_LINK_CLASS =
  "h-auto max-w-full items-start justify-start whitespace-normal p-0 text-left font-normal text-[#200f3b] text-xs break-words no-underline hover:text-[#4a2d6e] hover:underline";

const EXT_ICON = (
  <IconExternalLink aria-hidden="true" className="size-3 shrink-0 opacity-60" />
);

const FOOTER_COLUMNS = [
  {
    title: "Certifications",
    links: [
      {
        label: "Certified Associate In Project Management (CAPM)",
        href: "/certifications/certified-associate-in-project-management-capm",
      },
      {
        label: "Project Management Professional (PMP)",
        href: "/certifications/project-management-pmp",
      },
      {
        label: "Program Management Professional (PgMP)",
        href: "/certifications/program-management-pgmp",
      },
      {
        label: "Portfolio Management Professional (PfMP)",
        href: "/certifications/portfolio-management-pfmp",
      },
      {
        label: "PMI Construction Professional (PMI-CP)",
        href: "/certifications/construction",
      },
      {
        label: "PMI Agile Certified Practitioner (PMI-ACP)",
        href: "/certifications/agile-acp",
      },
      {
        label: "PMI Risk Management Professional (PMI-RMP)",
        href: "/certifications/risk-management-rmp",
      },
      {
        label: "PMI PMO Certified Professional (PMI-PMOCP)",
        href: "/certifications/pmo-certified-professional-pmi-pmocp",
      },
      {
        label: "PMI Professional In Business Analysis (PMI-PBA)",
        href: "/certifications/business-analysis-pba",
      },
      {
        label: "PMI Scheduling Professional (PMI-SP)",
        href: "/certifications/scheduling-sp",
      },
      {
        label:
          "PMI Certified Professional In AI Project Management (PMI-CPMAI)",
        href: "/certifications/ai-project-management-cpmai",
      },
      {
        label: "Certified Sustainable Project Professional (CSPP)",
        href: "/certifications/sustainability-cspp",
      },
    ],
  },
  {
    title: "Learning",
    links: [
      { label: "Exam Prep", href: "/learning/exam-prep" },
      { label: "Online Courses", href: "/learning/online-courses" },
      { label: "Free Courses", href: "/learning/free-online-courses" },
      { label: "Instructor Led", href: "/learning/instructor-led-training" },
      { label: "Webinars", href: "/learning/webinars" },
      { label: "PMI Training", href: "/learning/pmi-training" },
      { label: "Academic Programs", href: "/learning/academic-programs" },
      { label: "Thought Leadership", href: "/learning/thought-leadership" },
      { label: "Brightline", href: "/learning/brightline" },
      { label: "PM Journal", href: "/learning/project-management-journal" },
      {
        label: "Academic Research",
        href: "/learning/academic-sponsored-research",
      },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "2026 Events", href: "/events" },
      {
        label: "Group Registration",
        href: "/events/events-group-registration",
      },
      { label: "PMXPO", href: "/events/pmxpo" },
      {
        label: "Speaker Opportunities",
        href: "/events/speaking-opportunities",
      },
    ],
  },
  {
    title: "PMI SA for Organizations",
    links: [
      { label: "Partners", href: "/business-solutions/commercial-partners" },
      {
        label: "PMP for Orgs",
        href: "/business-solutions/pmp-project-management-certification",
      },
      { label: "Transformation", href: "/business-solutions/transformation" },
      {
        label: "Enterprise Membership",
        href: "/business-solutions/commercial-partners/enterprise-membership",
      },
      {
        label: "Executive Council",
        href: "/business-solutions/the-global-executive-council",
      },
      { label: "Job Board", href: "/business-solutions/talent-management" },
      {
        label: "PMI Infinity",
        href: "/business-solutions/commercial-partners/pmi-infinity-for-organizations",
      },
      { label: "Academic", href: "/business-solutions/academic-institutions" },
      { label: "Construction", href: "/business-solutions/construction" },
      {
        label: "Government",
        href: "/business-solutions/government-activities-advocacy",
      },
      { label: "HR", href: "/business-solutions/human-resources" },
      { label: "Non-Profits", href: "/business-solutions/non-profits" },
      { label: "Case Studies", href: "/business-solutions/case-studies" },
      {
        label: "Newsletter",
        href: "/business-solutions/enterprise-newsletter",
      },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Become a Member", href: "/membership" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
] as const;

const LEGAL_LINKS = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Purchasing Terms", href: "/purchasing-terms" },
  { label: "Advertising & Sponsorship", href: "/advertising" },
] as const;

function FooterLink({
  external,
  href,
  label,
}: {
  external?: boolean;
  href: string;
  label: string;
}) {
  if (external) {
    return (
      <Button
        className={FOOTER_LINK_CLASS}
        nativeButton={false}
        render={
          // biome-ignore lint/a11y/useAnchorContent: visible label provided via Button children; aria-label added for SR fallback
          <a
            aria-label={label}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          />
        }
        variant="link"
      >
        <span className="inline-flex max-w-full flex-wrap items-start gap-x-1 gap-y-0.5 leading-snug">
          <span className="break-words">{label}</span>
          {EXT_ICON}
        </span>
      </Button>
    );
  }

  return (
    <Button
      className={FOOTER_LINK_CLASS}
      nativeButton={false}
      render={<Link to={href as never} />}
      variant="link"
    >
      <span className="break-words">{label}</span>
    </Button>
  );
}

function FooterLogo() {
  return (
    <>
      <Link className="inline-flex items-center gap-3" to="/">
        <img
          alt="PMI SA"
          className="h-10 w-auto"
          height={40}
          src="/logo.webp"
          width={131}
        />
      </Link>

      <div className="border-[#d4cbc3] border-t" />

      <p className="font-bold font-heading text-4xl text-[#200f3b] leading-none">
        PMI SA®
      </p>
    </>
  );
}

function FooterColumnLinks({
  column,
}: {
  column: (typeof FOOTER_COLUMNS)[number];
}) {
  return (
    <ul className="flex flex-col gap-2.5">
      {column.links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href} label={link.label} />
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-primary border-t bg-white">
      <div className="w-full px-6 pt-8 pb-10 md:px-10 md:pt-12">
        {/* Mobile logo */}
        <div className="mb-8 flex flex-col gap-6 md:hidden">
          <FooterLogo />
        </div>

        <div className="grid grid-cols-1 gap-x-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {FOOTER_COLUMNS.map((column) => (
            <div
              className="border-[#d4cbc3] border-t md:border-0"
              key={column.title}
            >
              {/* Mobile accordion */}
              <div className="md:hidden">
                <details className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[#200f3b] text-sm [&::-webkit-details-marker]:hidden">
                    {column.title}
                    <IconChevronDown
                      aria-hidden="true"
                      className="h-4 w-4 text-[#200f3b]/50 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="mt-3">
                    <FooterColumnLinks column={column} />
                  </div>
                </details>
              </div>

              {/* Desktop static columns */}
              <div className="hidden md:block">
                <h3 className="mb-4 font-bold text-[#200f3b] text-sm">
                  {column.title}
                </h3>
                <FooterColumnLinks column={column} />
              </div>
            </div>
          ))}

          {/* Desktop logo */}
          <div className="hidden flex-col gap-6 md:flex">
            <FooterLogo />
          </div>
        </div>
      </div>

      <div className="border-[#d4cbc3] border-t">
        <div className="flex w-full flex-col items-start justify-between gap-4 px-6 py-5 md:flex-row md:px-10">
          <nav className="flex flex-wrap items-start gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Button
                className="h-auto max-w-full items-start justify-start whitespace-normal break-words p-0 text-left font-normal text-[#200f3b] text-xs no-underline hover:text-[#4a2d6e] hover:underline"
                key={link.label}
                nativeButton={false}
                render={<Link to={link.href as never} />}
                variant="link"
              >
                {link.label}
              </Button>
            ))}
          </nav>
          <p className="text-[#6b5b7b] text-xs">
            © 2026 Project Management Institute Gov
          </p>
        </div>
      </div>
    </footer>
  );
}
