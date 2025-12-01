import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#002147] text-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Dedicated to simplifying Medicare for our community with honesty, integrity, and expertise.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/randy-lisa.png"
                                    alt="Randy and Lisa Foulds"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#002147] mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    For over a decade, Foulds Health Insurance has been a beacon of trust for seniors navigating the complex waters of Medicare. Founded by Randy and Lisa Foulds, our agency was built on a simple premise: treat every client like family.
                                </p>
                                <p>
                                    We understand that healthcare decisions are personal and often overwhelming. That&apos;s why we don&apos;t just sell policies; we build relationships. We take the time to understand your unique health needs, budget, and lifestyle to recommend the best possible coverage.
                                </p>
                                <p>
                                    Based in La Quinta, CA, we are proud to serve our local community and beyond. Our advice is always free, and our commitment to your well-being is unwavering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#002147] mb-4">Why Choose Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We believe in doing business the right way. Here are the core values that drive everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-blue-50 text-[#002147] rounded-lg flex items-center justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#002147] mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
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
