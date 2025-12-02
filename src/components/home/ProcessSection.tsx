"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Meeting",
        description: "We sit down with you to break down your options and understand your specific needs.",
    },
    {
        id: 2,
        title: "Enrollment",
        description: "We handle the paperwork to ensure your policy is issued correctly and on time.",
    },
    {
        id: 3,
        title: "Support",
        description: "We provide ongoing help with coverage, claims, and annual reviews.",
    },
];

export const ProcessSection = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block glass px-8 py-3 rounded-full mb-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#005d9a] uppercase tracking-wide">How It Works</h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
                    >
                        We simplify the complex world of Medicare into three easy steps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 rounded-[2.5rem] text-center hover:-translate-y-2 transition-transform duration-300 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#005d9a] to-[#1e9cd7] text-white rounded-2xl rotate-3 flex items-center justify-center text-3xl font-bold mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                                    {step.id}
                                </div>
                                <h3 className="text-2xl font-bold text-[#005d9a] mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
