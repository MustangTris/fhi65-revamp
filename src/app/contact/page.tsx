import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col">

            {/* HERO SECTION */}
            <section className="bg-slate-50 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6">
                        Medicare Made <span className="text-yellow-500">Easy</span>.
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Enrollment can be confusing. We break down your choices and give you our best recommendation. Expert advice, always free.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-16">
                        <Link href="/quotes" className="inline-block bg-blue-900 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-800 hover:-translate-y-1 transition-all">
                            Get A Free Quote
                        </Link>
                    </div>

                    {/* STATIC SOCIAL PROOF (Fast Loading) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {/* Review 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
                            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                            <p className="text-gray-600 italic mb-4">"Randy and Lisa are the best! They took all the confusion out of signing up for Medicare."</p>
                            <p className="font-bold text-blue-900">- John D.</p>
                        </div>
                        {/* Review 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
                            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                            <p className="text-gray-600 italic mb-4">"I've been a client for years. They always call me back right away. A+ service."</p>
                            <p className="font-bold text-blue-900">- Mary S.</p>
                        </div>
                        {/* Review 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
                            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                            <p className="text-gray-600 italic mb-4">"Randy found a plan that saved me over $50 a month on prescriptions. Don't go anywhere else."</p>
                            <p className="font-bold text-blue-900">- Robert T.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900">How We Simplify It</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-6xl font-bold text-blue-100 mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">We Meet</h3>
                            <p className="text-gray-600">We break down your insurance options and choose a policy that works best for you.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-6xl font-bold text-blue-100 mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">We Enroll</h3>
                            <p className="text-gray-600">We handle the paperwork and ensure your policy is issued correctly.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-6xl font-bold text-blue-100 mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">We Support</h3>
                            <p className="text-gray-600">After you enroll, we are always here to help ensure your coverage stays affordable.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}