const Footer = () => {
    return (
        <footer className="bg-[#00152e] text-gray-300 py-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="mb-2">78010 Main Street, Suite 208</p>
                        <p className="mb-4">La Quinta, CA 92253</p>
                        <p className="mb-2">
                            <span className="font-medium text-white">Phone:</span> 760.346.6565
                        </p>
                        <p>
                            <span className="font-medium text-white">Email:</span> randy@fhi65.com
                        </p>
                    </div>

                    {/* Quick Links or Extra Info could go here, keeping it simple for now */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Foulds Health Insurance</h3>
                        <p className="text-sm leading-relaxed">
                            Helping you navigate Medicare with confidence. Our expert advice is always free and comes with no obligation.
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Disclaimer</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Foulds Health Insurance. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
