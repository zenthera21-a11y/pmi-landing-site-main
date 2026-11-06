import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@pmi-south-asia/ui/components/navigation-menu";
import { cn } from "@pmi-south-asia/ui/lib/utils";
import { IconChevronRight, IconMenu, IconX } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface NavLink {
  external?: boolean;
  href: string;
  label: string;
}
interface NavGroup {
  links: readonly NavLink[];
  title: string;
}
interface NavItem {
  groups: readonly NavGroup[];
  label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Certifications",
    groups: [
      {
        title: "Core",
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
        ],
      },
      {
        title: "Specialized",
        links: [
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
    ],
  },
  {
    label: "Learning",
    groups: [
      {
        title: "By Type",
        links: [
          { label: "Exam Prep", href: "/learning/exam-prep" },
          { label: "Online Courses", href: "/learning/online-courses" },
          { label: "Free Courses", href: "/learning/free-online-courses" },
          {
            label: "Instructor Led",
            href: "/learning/instructor-led-training",
          },
          { label: "Webinars", href: "/learning/webinars" },
          { label: "PMI Training", href: "/learning/pmi-training" },
          { label: "Academic Programs", href: "/learning/academic-programs" },
        ],
      },
      {
        title: "Thought Leadership",
        links: [
          { label: "Thought Leadership", href: "/learning/thought-leadership" },
          { label: "Brightline", href: "/learning/brightline" },
          { label: "PM Journal", href: "/learning/project-management-journal" },
          {
            label: "Academic Research",
            href: "/learning/academic-sponsored-research",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    groups: [
      {
        title: "Connect and Contribute",
        links: [{ label: "PMI Infinity AI Tool", href: "/infinity" }],
      },
      {
        title: "Discover and Learn",
        links: [
          { label: "Templates and Insights", href: "/insights" },
          { label: "The PMI Blog", href: "/blog" },
          {
            label: "The Shift Code™ Podcast",
            href: "/the-shift-code-podcast",
          },
          {
            label: "Projectified® Podcast",
            href: "/projectified-podcast",
          },
          { label: "AI Today Podcast", href: "/ai-today-podcast" },
        ],
      },
      {
        title: "Grow Your Career",
        links: [
          {
            label: "PMI Job Board",
            href: "https://jobs.pmi.org/",
            external: true,
          },
          { label: "Career Resources", href: "/career-resources" },
          { label: "Career Navigator", href: "/career-navigator" },
          { label: "Military", href: "/military" },
        ],
      },
    ],
  },
  {
    label: "Events",
    groups: [
      {
        title: "Attend",
        links: [
          { label: "2026 Events", href: "/events" },
          {
            label: "Group Registration",
            href: "/events/events-group-registration",
          },
        ],
      },
      {
        title: "Virtual",
        links: [
          { label: "PMXPO", href: "/events/pmxpo" },
          { label: "Webinars", href: "/learning/webinars" },
        ],
      },
      {
        title: "Participate",
        links: [
          {
            label: "Speaker Opportunities",
            href: "/events/speaking-opportunities",
          },
        ],
      },
    ],
  },
  {
    label: "PMI SA for Organizations",
    groups: [
      {
        title: "Enterprise",
        links: [
          {
            label: "Partners",
            href: "/business-solutions/commercial-partners",
          },
          {
            label: "PMP for Orgs",
            href: "/business-solutions/pmp-project-management-certification",
          },
          {
            label: "Transformation",
            href: "/business-solutions/transformation",
          },
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
        ],
      },
      {
        title: "Industry",
        links: [
          {
            label: "Academic",
            href: "/business-solutions/academic-institutions",
          },
          { label: "Construction", href: "/business-solutions/construction" },
          {
            label: "Government",
            href: "/business-solutions/government-activities-advocacy",
          },
          { label: "HR", href: "/business-solutions/human-resources" },
          { label: "Non-Profits", href: "/business-solutions/non-profits" },
        ],
      },
      {
        title: "Business",
        links: [
          { label: "Case Studies", href: "/business-solutions/case-studies" },
          {
            label: "Newsletter",
            href: "/business-solutions/enterprise-newsletter",
          },
        ],
      },
    ],
  },
];

const LINK_BASE =
  "flex items-center gap-1 text-gray-600 text-sm leading-snug hover:underline";

function NavLinkItem({ link }: { link: NavLink }) {
  return (
    <Link
      activeOptions={{ exact: true }}
      activeProps={{ className: "font-semibold" }}
      className={LINK_BASE}
      rel={link.external ? "noopener noreferrer" : undefined}
      target={link.external ? "_blank" : undefined}
      to={link.href as never}
    >
      {link.label}
    </Link>
  );
}

const ABOUT_TRIGGER = cn(
  navigationMenuTriggerStyle(),
  "h-12 rounded-none px-3 text-sm hover:bg-primary hover:text-white"
);

function AnnouncementBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="flex h-12 items-center justify-between gap-4 px-6">
        <p className="flex-1 text-center text-sm">
          Our newest certification is here! Be the first to become a newly
          Certified Sustainable Project Professional (CSPP)™.{" "}
          <Link
            className="ml-2 inline-block rounded bg-primary/90 px-3 py-1 font-semibold text-primary-foreground text-xs hover:bg-primary/80"
            params={{ slug: "sustainability-cspp" }}
            to="/certifications/$slug"
          >
            Explore CSPP™
          </Link>
        </p>
        <button
          aria-label="Close banner"
          className="shrink-0 rounded p-1 hover:bg-primary-foreground/10"
          onClick={onClose}
          type="button"
        >
          <IconX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function TopUtilityBar() {
  return (
    <div className="border-gray-200 border-b bg-white">
      <div className="flex h-14 items-center justify-between gap-4 px-6">
        <Link className="flex items-center gap-3" to="/">
          <img
            alt="PMI SA Logo"
            className="h-10 w-auto"
            height={40}
            src="/logo.webp"
            width={131}
          />
        </Link>

        <div className="flex gap-4">
          <a
            className="text-gray-700 text-sm hover:text-primary"
            href="https://exam.pmisa.in"
            rel="noopener noreferrer"
            target="_blank"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

function PrimaryNav({ onOpenMobile }: { onOpenMobile: () => void }) {
  return (
    <nav className="relative bg-white text-gray-900 shadow-sm">
      <div className="flex h-12 items-center justify-between gap-2 px-6">
        <button
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded text-primary hover:bg-gray-100 md:hidden"
          onClick={onOpenMobile}
          type="button"
        >
          <IconMenu className="h-5 w-5" />
        </button>
        <NavigationMenu
          className="hidden md:flex"
          popupClassName="rounded-none"
        >
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 rounded-none px-3 text-sm hover:bg-primary hover:text-white data-[open]:bg-primary data-[popup-open]:bg-primary data-[open]:text-white data-[popup-open]:text-white data-[open]:hover:bg-primary data-[popup-open]:hover:bg-primary"
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!rounded-none !shadow-none !ring-0 !border-0">
                  <div className="w-[min(800px,calc(100vw-2rem))] p-6">
                    {item.label === "Certifications" && (
                      <h2 className="mb-4 font-bold text-gray-900 text-lg">
                        Professional Certification
                      </h2>
                    )}
                    <div className="flex gap-10">
                      {item.groups.map((group) => (
                        <div className="min-w-40" key={group.title}>
                          <h3 className="mb-2 font-bold text-gray-900 text-sm">
                            {group.title}
                          </h3>
                          <div className="mb-3 h-px w-full bg-primary" />
                          <ul className="flex flex-col gap-2">
                            {group.links.map((link) => (
                              <li key={`${group.title}-${link.label}`}>
                                <NavLinkItem link={link} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ className: "font-semibold" }}
                className={ABOUT_TRIGGER}
                to="/membership"
              >
                Membership
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ className: "font-semibold" }}
                className={ABOUT_TRIGGER}
                to="/contact"
              >
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ className: "font-semibold" }}
                className={ABOUT_TRIGGER}
                to="/about"
              >
                About Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

function MobileSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-60 md:hidden">
      <button
        aria-label="Close menu overlay"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        type="button"
      />
      <div className="absolute inset-y-0 right-0 flex h-full w-80 max-w-[90%] flex-col bg-white shadow-2xl">
        <div className="flex h-12 items-center justify-between border-gray-200 border-b bg-primary px-4 text-primary-foreground">
          <span className="font-extrabold tracking-tight">Menu</span>
          <button
            aria-label="Close menu"
            className="rounded p-1 hover:bg-primary-foreground/10"
            onClick={onClose}
            type="button"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-100">
            {NAV_ITEMS.map((item) => {
              const isOpen = expanded === item.label;
              return (
                <li key={item.label}>
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-gray-900 text-sm hover:bg-gray-50"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    type="button"
                  >
                    {item.label}
                    <IconChevronRight
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <div className="bg-gray-50 px-4 pt-1 pb-3">
                      {item.groups.map((group) => (
                        <div className="py-2" key={group.title}>
                          <h4 className="mb-1 flex items-center gap-2 font-bold text-gray-900 text-xs">
                            {group.title}
                            <span className="h-0.5 w-4 bg-primary" />
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {group.links.map((link) => (
                              <li key={`${group.title}-${link.label}`}>
                                <NavLinkItem link={link} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link
            className="flex w-full items-center justify-between border-gray-100 border-b px-4 py-3 font-semibold text-gray-900 text-sm hover:bg-gray-50"
            onClick={onClose}
            to="/membership"
          >
            Membership
          </Link>
          <Link
            className="flex w-full items-center justify-between border-gray-100 border-b px-4 py-3 font-semibold text-gray-900 text-sm hover:bg-gray-50"
            onClick={onClose}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="flex w-full items-center justify-between border-gray-100 border-b px-4 py-3 font-semibold text-gray-900 text-sm hover:bg-gray-50"
            onClick={onClose}
            to="/about"
          >
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-2 border-gray-200 border-t bg-white p-4">
          <a
            className="flex-1 rounded border border-primary px-3 py-2 text-center font-semibold text-primary text-sm"
            href="https://exam.pmisa.in"
            onClick={onClose}
            rel="noopener noreferrer"
            target="_blank"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  return (
    <>
      <header className="z-50">
        {bannerOpen && (
          <AnnouncementBanner onClose={() => setBannerOpen(false)} />
        )}
        <TopUtilityBar />
        <PrimaryNav onOpenMobile={() => setMobileOpen(true)} />
      </header>
      <MobileSheet onClose={() => setMobileOpen(false)} open={mobileOpen} />
    </>
  );
}
