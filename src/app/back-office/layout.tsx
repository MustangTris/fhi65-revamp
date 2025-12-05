import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Back Office | B2B Acquisitions",
    description: "A specialized acquisition program for retiring insurance agents. We buy books of business ensuring your clients are cared for and your legacy is preserved.",
    alternates: {
        canonical: '/back-office',
    },
};

export default function BackOfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
