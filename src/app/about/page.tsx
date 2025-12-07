import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
    description: "Meet Randy and Lisa Foulds, the dedicated team behind Foulds Health Insurance. Learn about our mission to simplify Medicare for our La Quinta community.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="py-2 px-4 rounded-full bg-blue-100/50 text-[#005d9a] font-bold text-sm border border-blue-200 backdrop-blur-sm">
                            Our Mission
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-[#005d9a] tracking-tight">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Dedicated to simplifying Medicare for our community with honesty, integrity, and expertise.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card rounded-[3rem] p-8 md:p-16">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/50">
                                    <Image
                                        src="/images/randy-lisa-portrait.jpg"
                                        alt="Randy and Lisa Foulds"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#005d9a] mb-8">Our Story</h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                    <p>
                                        For close to 20 years, we have dedicated ourselves to mastering the complexities of Medicare, learning from the best in the field to serve our community with excellence. What started as a family mission has grown into a lifelong commitment to helping our neighbors navigate their healthcare options with confidence and peace of mind.
                                    </p>
                                    <p>
                                        Medicare can be overwhelming, but we are here to simplify the process. Our goal is not just to find a plan, but to find the <em>right</em> plan—one that truly meets your unique needs. We believe that everyone deserves clarity, patience, and an advocate who puts their interests first.
                                    </p>
                                    <p>
                                        We are incredibly humbled and grateful for the trust you have placed in us. Being recognized with awards like the Business of The Year 2025 and the NABIP Soaring Eagle is a tremendous honor, but our greatest reward is the satisfaction of our clients. Thank you for allowing us to be part of your healthcare journey; we look forward to serving you for many years to come.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#005d9a] mb-4">Awards & Recognition</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-3xl text-center border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-4">🏆</div>
                            <h3 className="text-lg font-bold text-[#005d9a] mb-2">Business of The Year 2025</h3>
                            <p className="text-sm text-gray-600 font-medium">Greater Coachella Valley Chamber of Commerce La Quinta</p>
                            <p className="text-xs text-gray-500 mt-2 italic">Recognized by the Senate Congress and County Supervisor</p>
                        </div>
                        <div className="glass-card p-8 rounded-3xl text-center border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-lg font-bold text-[#005d9a] mb-2">Anthem Shooting Star 2021</h3>
                            <p className="text-sm text-gray-600 font-medium">Recognized for client retention and leading service</p>
                        </div>
                        <div className="glass-card p-8 rounded-3xl text-center border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-4">🦅</div>
                            <h3 className="text-lg font-bold text-[#005d9a] mb-2">NABIP Soaring Eagle</h3>
                            <p className="text-sm text-gray-600 font-medium">Top 10% of agents in the country</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#005d9a] mb-6">Why Choose Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                            We believe in doing business the right way. Here are the core values that drive everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity First",

                                description: "We always put your interests above our own. If your current plan is best, we'll tell you to keep it.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Expert Knowledge",
                                description: "Medicare changes every year. We stay up-to-date on all regulations and plan details so you don't have to.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                )
                            },
                            {
                                title: "Lifetime Support",
                                description: "Our service doesn't end after enrollment. We are here for claims, billing issues, and annual reviews.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <div key={index} className="glass-card p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#005d9a] to-[#1e9cd7] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#005d9a] mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

