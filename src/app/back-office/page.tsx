"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileText } from "lucide-react";

export default function BackOfficePage() {
    return (
        <div className="min-h-screen bg-[#f0f9ff] relative overflow-hidden font-[family-name:var(--font-outfit)]">
            {/* Background - Static Gradient for Performance */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none -z-10" />

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

                    {/* Visual / Commitment Section */}
                    <div className="glass p-8 rounded-[2.5rem] border-white/40 flex flex-col justify-center">
                        <div className="bg-white/40 rounded-2xl p-6 mb-6">
                            <h3 className="text-xl font-bold text-[#005d9a] mb-2">Our Commitment</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your book of business represents years of hard work and genuine relationships. We don't take that lightly. When you transfer your clients to Foulds Health Insurance Agency, you're ensuring they continue to receive the personalized, integrity-driven service they deserve.
                            </p>
                        </div>
                        <div className="bg-white/40 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-[#005d9a] mb-2">Seamless Integration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We utilize dedicated support staff to integrate your clients into our system without disruption. They'll continue to receive annual reviews, help with claims, and the expert guidance they've come to expect from you.
                            </p>
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

                    {/* Detailed steps disclaimer removed for production readiness */}
                </div>

                {/* Commission Retention Payout Graphic */}
                <div className="mb-24 animate-fade-in-up animation-delay-700">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#005d9a] mb-4">Transparent Valuation</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our commission retention structure is simple and rewarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
                        {/* Tier 1 */}
                        <div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-gray-500 font-medium mb-2 uppercase tracking-wide text-sm">Tier 1</div>
                            <div className="text-2xl font-bold text-gray-900 mb-4">&lt; $100k</div>
                            <div className="text-sm text-gray-500 mb-8">Annual Gross Commissions</div>
                            <div className="border-t border-gray-200 pt-8">
                                <div className="text-5xl font-bold text-[#005d9a] mb-2">60%</div>
                                <div className="text-gray-600 font-medium">Retention Rate</div>
                            </div>
                        </div>

                        {/* Tier 2 */}
                        <div className="glass-card p-8 rounded-[2rem] bg-white/60 border-blue-200 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative transform scale-105 z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#005d9a] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                                Most Common
                            </div>
                            <div className="text-[#005d9a] font-medium mb-2 uppercase tracking-wide text-sm">Tier 2</div>
                            <div className="text-2xl font-bold text-gray-900 mb-4">$100k - $250k</div>
                            <div className="text-sm text-gray-500 mb-8">Annual Gross Commissions</div>
                            <div className="border-t border-gray-200 pt-8">
                                <div className="text-6xl font-bold text-[#005d9a] mb-2">65%</div>
                                <div className="text-gray-600 font-bold">Retention Rate</div>
                            </div>
                        </div>

                        {/* Tier 3 */}
                        <div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-gray-500 font-medium mb-2 uppercase tracking-wide text-sm">Tier 3</div>
                            <div className="text-2xl font-bold text-gray-900 mb-4">&gt; $250k</div>
                            <div className="text-sm text-gray-500 mb-8">Annual Gross Commissions</div>
                            <div className="border-t border-gray-200 pt-8">
                                <div className="text-5xl font-bold text-[#005d9a] mb-2">70%</div>
                                <div className="text-gray-600 font-medium">Retention Rate</div>
                            </div>
                        </div>
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
