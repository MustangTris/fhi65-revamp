import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Health Insurance | Foulds Health Insurance",
    description: "Get covered for your travels. Choose between robust health insurance or comprehensive trip protection including cancellation and lost luggage coverage.",
};

export default function TravelHealthPage() {
    const HEALTH_LINK = "https://bcbsglobalsolutions.com/individuals-and-families?link_id=116888";
    const TRIP_PROTECTION_LINK = "https://www.hthtravelinsurance.com/?link_id=116888";

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#005d9a] mb-8">
                        Travel Health Insurance
                    </h1>

                    <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Planning a trip abroad? We offer two distinct types of coverage to ensure your peace of mind while traveling.
                        Choose the plan that best fits your needs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Option 1: Robust Health */}
                        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block bg-blue-100 text-[#005d9a] font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                                    Option 1
                                </span>
                                <h2 className="text-2xl font-bold text-[#005d9a] mb-3">
                                    Global Health Insurance
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Robust medical coverage for international travelers. Ideal if your main concern is ensuring you have top-tier health insurance while outside the country.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={HEALTH_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full justify-center items-center bg-[#005d9a] hover:bg-[#1e9cd7] text-white font-bold text-lg px-6 py-3 rounded-xl transition-colors duration-300"
                                >
                                    Get Health Coverage
                                </a>
                            </div>
                        </div>

                        {/* Option 2: Trip Protection */}
                        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block bg-teal-100 text-teal-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                                    Option 2
                                </span>
                                <h2 className="text-2xl font-bold text-[#005d9a] mb-3">
                                    Trip Protection & Health
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Comprehensive travel insurance that includes medical coverage <strong>plus</strong> protection for trip cancellation, interruption, and lost luggage.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={TRIP_PROTECTION_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full justify-center items-center bg-[#1e9cd7] hover:bg-[#005d9a] text-white font-bold text-lg px-6 py-3 rounded-xl transition-colors duration-300"
                                >
                                    Get Trip Protection
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 max-w-2xl mx-auto mb-10">
                        <p className="text-sm text-gray-700">
                            By applying through these links, <span className="font-bold text-[#005d9a]">Foulds Health Insurance</span> will be automatically assigned as your agent. We'll be ready to assist you with any service needs or claims.
                        </p>
                    </div>

                    <div className="text-gray-500 text-sm">
                        <p>
                            *You will be redirected to the carrier's secure application page.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
