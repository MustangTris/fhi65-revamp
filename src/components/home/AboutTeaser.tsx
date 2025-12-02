"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutTeaser = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                    {/* Background gradient for the card */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
                            >
                                <Image
                                    src="/images/randy-lisa.png"
                                    alt="Randy and Lisa Foulds"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-[#005d9a] mb-6"
                            >
                                An Experienced Team You Can Trust
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-700 mb-8 leading-relaxed font-medium"
                            >
                                Randy and Lisa Foulds have been helping seniors navigate Medicare for over a decade. We believe in treating every client like family, offering honest, transparent advice that puts your health first.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    href="/about"
                                    className="inline-flex items-center text-[#005d9a] font-bold text-lg hover:text-[#1e9cd7] transition-colors group"
                                >
                                    Meet the Team
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
