import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#00152e] to-[#000f21] text-gray-300 relative overflow-hidden">
            {/* Decorative top border/glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white text-2xl font-bold tracking-wide">FHI<span className="text-[#1e9cd7]">65</span></h3>
                        <p className="text-sm leading-relaxed text-gray-400 font-medium">
                            Helping you navigate Medicare with confidence. Our expert advice is always free and comes with no obligation.
                        </p>
                        <div className="pt-2 space-y-3">
                            <p className="flex items-start space-x-3">
                                <span className="text-[#1e9cd7] mt-1">📍</span>
                                <span className="text-sm">78010 Main Street, Suite 208<br />La Quinta, CA 92253</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span className="text-[#1e9cd7]">📞</span>
                                <a href="tel:7603466565" className="hover:text-white transition-colors text-sm font-medium">760.346.6565</a>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span className="text-[#1e9cd7]">✉️</span>
                                <a href="mailto:randy@fhi65.com" className="hover:text-white transition-colors text-sm font-medium">randy@fhi65.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Get a Quote', 'Forms & Resources', 'News & Updates', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Get a Quote' ? '/quotes' : item === 'Forms & Resources' ? '/forms' : item === 'News & Updates' ? '/news' : '/contact'}
                                        className="hover:text-[#1e9cd7] transition-colors text-sm font-medium block hover:translate-x-1 duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            {['Medicare Supplements', 'Medicare Advantage', 'Prescription Drug Plans', 'Dental & Vision', 'Long Term Care'].map((item) => (
                                <li key={item} className="text-sm font-medium hover:text-gray-200 transition-colors cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Important Notice</h3>
                        <div className="glass-dark p-4 rounded-xl">
                            <p className="text-xs text-gray-300 leading-relaxed">
                                We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#000a14] py-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Foulds Health Insurance. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

