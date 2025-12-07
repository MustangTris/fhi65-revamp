import AgencyBlocForm from "../../components/forms/AgencyBlocForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get a Quote",
    description: "Request a free, no-obligation Medicare quote from Foulds Health Insurance. Personalized plans tailored to your specific healthcare needs and budget.",
    alternates: {
        canonical: '/quotes',
    },
};

export default function QuotesPage() {
    return (
        <div className="min-h-screen py-12 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#005d9a] mb-6">Get Your Free Quote</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below to receive a personalized Medicare quote. There is no cost and no obligation to enroll.
                    </p>
                </div>

                <div className="glass-card rounded-2xl shadow-xl overflow-hidden p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-[#1e9cd7] text-2xl font-bold">Quote Request Form</h2>
                        <p className="text-gray-600 text-sm mt-2">Please provide accurate information for the best results.</p>
                    </div>

                    <AgencyBlocForm />

                    <p className="text-xs text-gray-500 text-center mt-8">
                        By submitting this form, you agree that a licensed insurance agent may contact you by phone or email to answer any questions or provide additional information about Medicare plans.
                    </p>
                </div>
            </div>
        </div>
    );
}
