import Link from "next/link";
import articles from "../../data/articles.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Insights | Foulds Health Insurance",
    description: "Stay informed with the latest updates on Medicare, health insurance, and wellness from our expert team.",
};

export default function NewsPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6">News & Insights</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest updates on Medicare, health insurance, and wellness.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                        <h2 className="text-2xl font-bold text-[#002147] mb-4">Read Our Latest Insights</h2>
                        <p className="text-gray-600 mb-6">
                            Follow our expert contributor, Don Akchin, on Medium for in-depth articles on Medicare and health insurance.
                        </p>
                        <a
                            href="https://don-53849.medium.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#005d9a] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1e9cd7] transition-colors shadow-md"
                        >
                            Visit Don Akchin on Medium
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.5 10.5h2v-2h-2v2zm-8 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-4 4h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM5 5v14h14V5H5zm16 0c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                            <div className="h-48 bg-[#002147]/10 w-full relative">
                                {/* Placeholder for blog image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                    [Image Placeholder]
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                    <span className="font-semibold text-[#FFD700] uppercase tracking-wider">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#002147] mb-3 leading-tight hover:text-blue-700 transition-colors">
                                    <Link href="#">{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#002147] font-semibold hover:text-[#FFD700] transition-colors">
                                    Read Article <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
