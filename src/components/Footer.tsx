import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#00152e] text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white text-2xl font-bold tracking-wide">FHI<span className="text-[#FFD700]">65</span></h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Helping you navigate Medicare with confidence. Our expert advice is always free and comes with no obligation.
                        </p>
                        <div className="pt-4 space-y-2">
                            <p className="flex items-center space-x-2">
                                <span className="text-[#FFD700]">📍</span>
                                <span>78010 Main Street, Suite 208<br />La Quinta, CA 92253</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span className="text-[#FFD700]">📞</span>
                                <a href="tel:7603466565" className="hover:text-white transition-colors">760.346.6565</a>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span className="text-[#FFD700]">✉️</span>
                                <a href="mailto:randy@fhi65.com" className="hover:text-white transition-colors">randy@fhi65.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#FFD700] transition-colors">About Us</Link></li>
                            <li><Link href="/quotes" className="hover:text-[#FFD700] transition-colors">Get a Quote</Link></li>
                            <li><Link href="/forms" className="hover:text-[#FFD700] transition-colors">Forms & Resources</Link></li>
                            <li><Link href="/news" className="hover:text-[#FFD700] transition-colors">News & Updates</Link></li>
                            <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services (Placeholder) */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Medicare Supplements</li>
                            <li>Medicare Advantage</li>
                            <li>Prescription Drug Plans</li>
                            <li>Dental & Vision</li>
                            <li>Long Term Care</li>
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Important Notice</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#000f21] py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Foulds Health Insurance. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
