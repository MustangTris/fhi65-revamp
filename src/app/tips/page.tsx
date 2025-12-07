import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Tips & Resources",
    description: "Helpful video tips and insights to guide you through Medicare, from open enrollment to understanding your coverage options.",
    alternates: {
        canonical: '/tips',
    },
};

export default function TipsPage() {
    const videos = [
        {
            id: 'yYO4g1HMSZY',
            title: 'Helpful Tip 1',
        },
        {
            id: 'fpOzxjPbBuc',
            title: 'Helpful Tip 2',
        },
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorative Elements using the requested "Apple's liquid glass" vibe */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] pb-2">
                        Helpful Tips & Insights
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Expert advice and detailed explanations to help you navigate your health insurance journey.
                    </p>
                    <div className="pt-4">
                        <a
                            href="https://www.youtube.com/channel/UCGMRE-RgoFlv3a10T1svUtg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[#ff0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Visit Our YouTube Channel
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {videos.map((video) => (
                        <div key={video.id} className="glass-card rounded-3xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-inner bg-black/5">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </div>



                <div className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-6">
                    <h2 className="text-2xl font-bold text-[#005d9a]">Looking for more specific advice?</h2>
                    <p className="text-gray-600">
                        Our team is ready to answer your questions and help you find the right plan for your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#005d9a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1e9cd7] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </main>
    );
}
