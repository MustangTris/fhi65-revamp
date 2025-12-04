import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | Foulds Health Insurance",
    description: "Thank you for your quote request. We will be in touch shortly.",
};

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
            <div className="relative w-full max-w-lg">
                {/* Background decorative blobs */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Glass Card */}
                <div className="relative backdrop-blur-xl bg-white/40 border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12 text-center overflow-hidden animate-fade-in-up">

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-full hover:animate-shine"></div>

                    {/* Success Icon */}
                    <div className="mx-auto mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#005d9a] to-[#1e9cd7] shadow-lg shadow-blue-500/30 animate-scale-in">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>

                    {/* Content */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4 tracking-tight">
                        Thank You!
                    </h1>
                    <p className="text-xl text-[#005d9a] font-medium mb-6">
                        You've made a great choice.
                    </p>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        We've received your request and are already getting to work. You're in good hands with Foulds Health Insurance.
                    </p>

                    {/* Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
