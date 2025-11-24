export default function QuotesPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-12 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6">Get Your Free Quote</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below to receive a personalized Medicare quote. There is no cost and no obligation to enroll.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-[#002147] px-8 py-6">
                        <h2 className="text-white text-xl font-semibold">Quote Request Form</h2>
                        <p className="text-blue-200 text-sm mt-1">Please provide accurate information for the best results.</p>
                    </div>

                    <form className="p-8 space-y-8">
                        {/* Personal Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Contact Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002147] focus:border-transparent outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Coverage Interests */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">I am interested in...</h3>
                            <div className="space-y-3">
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="w-5 h-5 text-[#002147] rounded focus:ring-[#002147]" />
                                    <span className="text-gray-700">Medicare Supplement (Medigap)</span>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="w-5 h-5 text-[#002147] rounded focus:ring-[#002147]" />
                                    <span className="text-gray-700">Medicare Advantage (Part C)</span>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="w-5 h-5 text-[#002147] rounded focus:ring-[#002147]" />
                                    <span className="text-gray-700">Prescription Drug Plans (Part D)</span>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-[#FFD700] text-[#002147] font-bold text-lg py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg">
                                Request Quote
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                By submitting this form, you agree that a licensed insurance agent may contact you by phone or email to answer any questions or provide additional information about Medicare plans.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
