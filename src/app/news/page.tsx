import Link from "next/link";

export default function NewsPage() {
    const posts = [
        {
            title: "Medicare Changes Coming in 2025",
            excerpt: "Important updates to Part D prescription drug coverage that could affect your out-of-pocket costs.",
            date: "October 15, 2024",
            category: "Medicare Updates"
        },
        {
            title: "The Difference Between Medigap and Medicare Advantage",
            excerpt: "A comprehensive guide to understanding the two main ways to get your Medicare coverage.",
            date: "September 22, 2024",
            category: "Education"
        },
        {
            title: "When to Enroll in Medicare Part B",
            excerpt: "Avoid late enrollment penalties by understanding your Initial Enrollment Period.",
            date: "August 10, 2024",
            category: "Enrollment"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6">News & Insights</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest updates on Medicare, health insurance, and wellness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
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
