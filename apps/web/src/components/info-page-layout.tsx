import type { ReactNode } from "react";

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function InfoPageLayout({
  title,
  children,
}: InfoPageLayoutProps) {
  return (
    <div className="w-full bg-white">
      <div className="bg-pmi-deep py-16 text-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-4xl">{title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
