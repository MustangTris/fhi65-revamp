import { BackgroundBlobs } from "../../components/ui/BackgroundBlobs";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
            <BackgroundBlobs />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#005d9a] mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Have questions about Medicare? We&apos;re here to help. Reach out to us directly or fill out the form below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="glass-card p-8 md:p-10 rounded-[2rem]">
                        <h2 className="text-2xl font-bold text-[#005d9a] mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100/50 p-4 rounded-2xl text-[#005d9a]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                                    <p className="text-gray-600 mt-1 font-medium">78010 Main Street, Suite 208<br />La Quinta, CA 92253</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100/50 p-4 rounded-2xl text-[#005d9a]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                                    <p className="text-gray-600 mt-1 font-medium">760.346.6565</p>
                                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100/50 p-4 rounded-2xl text-[#005d9a]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                                    <p className="text-gray-600 mt-1 font-medium">randy@fhi65.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-10 h-64 bg-blue-50/50 rounded-2xl overflow-hidden relative border border-blue-100 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.997687838646!2d-116.2956876847966!3d33.67215698071114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80daf7890b0e0001%3A0x1234567890abcdef!2s78010%20Main%20St%20%23208%2C%20La%20Quinta%2C%20CA%2092253!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Foulds Health Insurance Office Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 md:p-10 rounded-[2rem]">
                        <h2 className="text-2xl font-bold text-[#005d9a] mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="(555) 123-4567" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}