import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dental Plans | Foulds Health Insurance",
    description: "Find the right dental plan for you. Apply for dental insurance easily online with Foulds Health Insurance as your agent.",
};

export default function DentalPage() {
    // INFRASTRUCTURE: Insert commission link here
    const COMMISSION_LINK = "https://www.deltadentalins.com/shopping/delta/get-a-quote?issuerCode=DELTA&brokerId=306605";

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#005d9a] mb-8">
                        Dental Plans
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Good oral health is an important part of your overall well-being.
                        We help you find comprehensive dental coverage that fits your needs and budget.
                    </p>

                    <div className="bg-blue-50/50 rounded-3xl p-10 border border-blue-100 shadow-sm mb-12">
                        <h2 className="text-2xl font-bold text-[#005d9a] mb-4">
                            Apply Online
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Click the button below to browse plans and apply directly through our partner carrier.
                            By using this link, <span className="font-bold text-[#005d9a]">Foulds Health Insurance</span> will automatically be assigned as your agent,
                            ready to service your policy and assist with any needs that arise.
                        </p>

                        <a
                            href={COMMISSION_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            Get Dental Coverage
                        </a>

                        <p className="mt-4 text-sm text-gray-500">
                            *You will be redirected to the carrier's secure application page.
                        </p>
                    </div>

                    <div className="text-gray-600">
                        <p className="italic">
                            "We will be your agent ready to service your needs at ease."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
