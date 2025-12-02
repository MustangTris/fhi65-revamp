"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReviewCarousel from "../ReviewCarousel";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 z-10"
                >
                    <div className="glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative shine */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 text-[#005d9a] text-sm font-bold mb-8 border border-blue-100 backdrop-blur-sm">
                                <span className="mr-2">📍</span> La Quinta&apos;s Local Experts
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#005d9a]">
                                Medicare <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005d9a] to-[#1e9cd7]">
                                    Made Simple.
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-lg">
                                Navigate your options with confidence. Our expert advice is always free, with no obligation to enroll.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link
                                    href="/quotes"
                                    className="inline-flex justify-center items-center bg-[#005d9a] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 hover:bg-[#1e9cd7] transition-all duration-300"
                                >
                                    Get a Free Quote
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex justify-center items-center bg-white/50 text-[#005d9a] font-bold text-lg px-8 py-4 rounded-full shadow-md border border-white/60 hover:bg-white hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                                >
                                    Meet the Team
                                </Link>
                            </div>

                            <div className="w-full max-w-md">
                                <ReviewCarousel />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-[3rem] transform rotate-3 scale-105 blur-2xl" />
                    <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white/30">
                        <Image
                            src="/images/building.jpg"
                            alt="Foulds Health Insurance Office Building"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Glass overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#005d9a]/80 to-transparent backdrop-blur-[2px]" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
