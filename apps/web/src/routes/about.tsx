import {
  IconBuildingBank,
  IconBuildingCommunity,
  IconCertificate,
  IconCircleCheck,
  IconFileInvoice,
  IconId,
  IconLock,
  IconMapPin,
  IconReceiptTax,
  IconShieldCheck,
  IconUser,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
  head: () => ({
    meta: [
      { title: "About | PMI SA" },
      {
        name: "description",
        content:
          "Verified PMI SA corporate financial details, banking partner, and secure payment transparency.",
      },
    ],
  }),
});

const badges = [
  { label: "GST Registered", icon: <IconReceiptTax size={18} /> },
  { label: "MSME Registered", icon: <IconId size={18} /> },
  { label: "Secure Payments", icon: <IconLock size={18} /> },
  { label: "Invoice-Based Billing", icon: <IconFileInvoice size={18} /> },
  { label: "Verified Business", icon: <IconShieldCheck size={18} /> },
  { label: "Government Registered", icon: <IconCertificate size={18} /> },
];

const members = [{ name: "Kaptan Singh Bunkar", role: "Finance Manager" }];

function AboutComponent() {
  return (
    <main className="overflow-x-hidden bg-[#faf9f6] py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <section className="grid items-start gap-10 lg:grid-cols-2 xl:gap-14">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#5b21b6] px-4 py-2 font-bold text-white text-xs uppercase tracking-[0.16em] shadow-sm">
              <IconShieldCheck size={16} />
              Finance Branch Verification
            </div>

            <h1 className="mt-8 max-w-2xl font-extrabold text-4xl text-[#1e0a45] tracking-tight sm:text-5xl lg:text-6xl">
              Corporate Financial{" "}
              <span className="text-[#5b21b6]">Trust & Transparency</span>
            </h1>

            <p className="mt-6 max-w-xl text-[#475569] text-lg leading-8 lg:text-xl">
              At PMI SA, we maintain strictly verified financial channels for
              all enterprise transactions through our official partner, ensuring
              the highest standards of accountability and trust in every
              operation we undertake.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#16a34a]">
              <IconShieldCheck size={22} />
              <span>Verified Corporate Branch Profile</span>
            </div>
          </div>

          <BusinessCard />
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={<IconBuildingBank size={26} />}
            label="Banking Partner"
            title="Central Bank of India"
          >
            Our official banking partner for secure and reliable transactions.
          </InfoCard>

          <InfoCard
            accent="green"
            icon={<IconShieldCheck size={26} />}
            label="Status"
            title="Verified Business"
          >
            Verified & Compliant with all regulatory norms.
          </InfoCard>

          <InfoCard
            icon={<IconLock size={26} />}
            label="Payment Security"
            title="Official Business Bank Account"
          >
            <div className="mt-4 grid gap-2 text-[#111827] text-sm sm:grid-cols-3 md:grid-cols-1 2xl:grid-cols-3">
              <CheckItem>Invoice-Based Payments</CheckItem>
              <CheckItem>Secure Transactions</CheckItem>
              <CheckItem>100% Financial Transparency</CheckItem>
            </div>
          </InfoCard>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2">
            <IconUser className="text-[#5b21b6]" size={22} />
            <h2 className="font-extrabold text-2xl text-[#1e0a45]">
              Board of Director
            </h2>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {badges.map((badge) => (
              <TrustBadge icon={badge.icon} key={badge.label}>
                {badge.label}
              </TrustBadge>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-0">
            <Notice icon={<IconShieldCheck size={26} />}>
              We are a government-registered Indian business committed to
              transparency, accountability and secure financial practices.
            </Notice>
            <Notice accent="green" icon={<IconCircleCheck size={26} />}>
              Your trust is our priority. Every transaction is secure, verified
              and protected.
            </Notice>
          </div>
        </section>
      </div>
    </main>
  );
}

function BusinessCard() {
  return (
    <article className="flex flex-col gap-8 rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:p-6 xl:p-8">
      <div className="rounded-3xl bg-[#f5f0ff] px-6 py-8 text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/70">
          <IconShieldCheck className="text-[#5b21b6]" size={60} stroke={1.8} />
        </div>
        <div className="mt-4 flex justify-center gap-1 text-[#5b21b6]">
          <IconCertificate size={16} />
          <IconCertificate size={16} />
        </div>
        <p className="mt-3 font-extrabold text-2xl text-[#1e0a45]">
          PMI <span className="text-[#5b21b6]">SA</span>
        </p>
        <p className="mt-1 text-slate-500 text-sm">
          Trusted. Verified. Compliant.
        </p>
      </div>

      <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <DetailItem
          className="md:col-span-2 xl:col-span-3"
          icon={<IconBuildingCommunity size={22} />}
          label="Business Name"
          value="PMI Services"
        />
        <DetailItem
          icon={<IconReceiptTax size={22} />}
          label="GST Number"
          value="27AAECP3816E1ZL"
        />
        <DetailItem
          icon={<IconUser size={22} />}
          label="Business Type"
          value="Public"
        />
        <DetailItem
          icon={<IconCertificate size={22} />}
          label="Business Activity"
          value="Services"
        />
        <DetailItem
          className="md:col-span-2 xl:col-span-3"
          icon={<IconMapPin size={22} />}
          label="Registered Business Address"
          value="Oberoi Garden City, Off Western Express Highway, Goregaon East, Mumbai, 400063, Maharashtra, India"
        />
      </div>
    </article>
  );
}

function DetailItem({
  className = "",
  icon,
  label,
  value,
  valueClassName = "[overflow-wrap:anywhere]",
}: {
  className?: string;
  icon: ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div
      className={`flex min-w-0 items-start gap-3 rounded-2xl bg-slate-50/70 p-3 ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe] text-[#5b21b6]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-[11px] text-slate-500 uppercase tracking-[0.14em]">
          {label}
        </p>
        <p
          className={`mt-1 font-bold text-[#111827] leading-snug ${valueClassName}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  accent = "purple",
  icon,
  label,
  title,
  children,
}: {
  accent?: "purple" | "green";
  icon: ReactNode;
  label: string;
  title: string;
  children: ReactNode;
}) {
  const isGreen = accent === "green";

  return (
    <article className="h-full rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-full flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${isGreen ? "bg-green-50 text-[#16a34a]" : "bg-[#ede9fe] text-[#5b21b6]"}`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[#5b21b6] text-xs uppercase tracking-[0.14em]">
            {label}
          </p>
          <h2
            className={`mt-2 font-bold text-xl leading-snug ${isGreen ? "text-[#16a34a]" : "text-[#1e0a45]"}`}
          >
            {title}
          </h2>
          <div className="mt-3 text-[#475569] text-sm leading-6">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <IconCircleCheck className="mt-0.5 shrink-0 text-[#16a34a]" size={18} />
      <span className="leading-5">{children}</span>
    </div>
  );
}

function TrustBadge({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-3 py-3 font-semibold text-slate-700 text-sm">
      <span className="text-[#5b21b6]">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function Notice({
  accent = "purple",
  icon,
  children,
}: {
  accent?: "purple" | "green";
  icon: ReactNode;
  children: ReactNode;
}) {
  const isGreen = accent === "green";

  return (
    <div className="flex items-start gap-4 md:border-slate-200 md:border-l md:even:pl-8 md:first:border-l-0">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${isGreen ? "bg-green-50 text-[#16a34a]" : "bg-[#ede9fe] text-[#5b21b6]"}`}
      >
        {icon}
      </div>
      <p className="text-[#475569] leading-7">{children}</p>
    </div>
  );
}

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <article className="h-full rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[#5b21b6]">
          <IconUser size={28} stroke={1.8} />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-[#1e0a45] text-lg leading-snug">
            {name}
          </h3>
          <p className="mt-1 font-bold text-[#5b21b6] text-xs uppercase tracking-[0.14em]">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-[#475569] text-sm leading-6">
        {role} at PMI SA, supporting verified and transparent financial
        operations.
      </p>
    </article>
  );
}
