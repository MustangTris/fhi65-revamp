"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileText } from "lucide-react";

export default function BackOfficePage() {
    return (
        <div className="min-h-screen bg-[#f0f9ff] relative overflow-hidden font-[family-name:var(--font-outfit)]">
            {/* Background Animated Blobs - Liquid Glass Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <main className="relative z-10 pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-[#005d9a] text-sm font-semibold tracking-wide shadow-sm">
                        B2B Acquisitions
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] mb-6 drop-shadow-sm leading-tight">
                        The Back Office
                        <br />
                        <span className="text-4xl lg:text-6xl text-[#005d9a]/80 font-normal">
                            Your Legacy, Secured.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light">
                        A specialized acquisition program for retiring insurance agents. We buy books of business, ensuring your clients are cared for and your legacy is preserved.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact?subject=Valuation"
                            className="px-8 py-4 bg-[#005d9a] text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center group"
                        >
                            Request a Valuation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-8 py-4 glass text-[#005d9a] rounded-full font-bold hover:bg-white/50 transition-all duration-300"
                        >
                            How It Works
                        </Link>
                    </div>
                </div>

                {/* Content Section: The Pitch */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center animate-fade-in-up animation-delay-500">
                    <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10 group-hover:bg-blue-200/50 transition-colors duration-700"></div>
                        <h2 className="text-3xl font-bold text-[#005d9a] mb-6">Why Sell to FHI?</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: Users,
                                    title: "Client-First Transition",
                                    desc: "We prioritize your clients' continuity of care above all else.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Fair Valuation",
                                    desc: "Competitive multiples based on retention and portfolio health.",
                                },
                                {
                                    icon: FileText,
                                    title: "Defined Process",
                                    desc: "A transparent Standard Operating Procedure (SOP) for transfer.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-2xl text-[#005d9a]">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Placeholder for visual or text from PDF */}
                        <div className="glass p-8 rounded-[2.5rem] border-white/40">
                            <div className="bg-white/40 rounded-2xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-[#005d9a] mb-2">From the Pitch Deck</h3>
                                <p className="text-gray-500 italic">
                                    [Content from "BoB Transfer Pitch Ver. 2.pdf" to be inserted here.
                                    Targeting "Rest easy knowing your clients are in good hands" messaging.]
                                </p>
                            </div>
                            <div className="bg-white/40 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[#005d9a] mb-2">Key Metrics</h3>
                                <p className="text-gray-500 italic">
                                    [Content from PDF regarding valuation multiples and transfer timeline.]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section: SOP */}
                <div id="how-it-works" className="mb-24 animate-fade-in-up animation-delay-700">
                    <h2 className="text-4xl font-bold text-center text-[#005d9a] mb-12">Acquisition Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Discovery", desc: "Initial consultation to understand your book." },
                            { step: "02", title: "Valuation", desc: "We review data and provide a fair offer." },
                            { step: "03", title: "Transfer", desc: "Systematic transfer of carriers & clients." },
                            { step: "04", title: "Retirement", desc: "You transition out with peace of mind." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 rounded-3xl hover:bg-white/40 transition-all duration-300">
                                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-[#005d9a] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 max-w-2xl mx-auto italic mb-8">
                            *Detailed steps from "SOP_ Retiring Agent Book of Business Acquisition.pdf" will be populated here once file access is confirmed.*
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center glass-card p-12 rounded-[3rem] max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 -z-10"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#005d9a] mb-6">Ready to discuss your legacy?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                        Confidential. Professional. Fair. Let's start the conversation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-10 py-5 bg-[#005d9a] text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 items-center justify-center text-lg"
                    >
                        Contact Us Today
                    </Link>
                </div>

            </main>
        </div>
    );
}
