import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalBackground } from "../components/ui/GlobalBackground";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
    metadataBase: new URL('https://fhi65.com'),
    title: {
        default: "Foulds Health Insurance | Medicare Enrollment Made Simple",
        template: "%s | Foulds Health Insurance"
    },
    description: "Expert advice on Medicare options in La Quinta and beyond. Foulds Health Insurance Agency simplifies Medicare enrollment with integrity and experience.",
    keywords: ["Medicare", "Health Insurance", "La Quinta", "Coachella Valley", "Medicare Advantage", "Medicare Supplement", "Foulds Health Insurance", "Randy Foulds"],
    authors: [{ name: "Randy Foulds" }, { name: "Lisa Foulds" }],
    creator: "Foulds Health Insurance Agency",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fhi65.com",
        title: "Foulds Health Insurance | Medicare Enrollment Made Simple",
        description: "Expert advice on Medicare options in La Quinta and beyond. We simplify the complex world of Medicare.",
        siteName: "Foulds Health Insurance",
        images: [
            {
                url: "/images/office-building.jpg",
                width: 1200,
                height: 630,
                alt: "Foulds Health Insurance Office",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Foulds Health Insurance | Medicare Enrollment Made Simple",
        description: "Expert advice on Medicare options in La Quinta and beyond. We simplify the complex world of Medicare.",
        images: ["/images/office-building.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} font-sans text-gray-900`}>
                <GlobalBackground />
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}