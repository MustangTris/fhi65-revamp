"use client";

import { motion } from "framer-motion";

export function RetentionGraph() {
    return (
        <div className="w-full max-w-5xl mx-auto mb-24 animate-fade-in-up animation-delay-700">
            <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden">

                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#005d9a]">Retention Impact</h3>
                    <p className="text-gray-600">See how retention affects your long-term earnings.</p>
                </div>

                {/* Graph Container */}
                <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] max-h-[500px]">

                    {/* Axis Labels */}
                    <div className="absolute top-0 left-0 text-xs font-bold text-gray-500 uppercase tracking-widest -rotate-90 origin-bottom-left translate-x-8 translate-y-full">
                        Annual Gross Earnings
                    </div>
                    <div className="absolute bottom-0 right-0 text-xs font-bold text-gray-500 uppercase tracking-widest translate-y-6">
                        Time
                    </div>

                    <svg
                        viewBox="0 0 1000 400"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                    >
                        {/* Grid/Axes Lines */}
                        <line x1="50" y1="350" x2="950" y2="350" stroke="#cbd5e1" strokeWidth="2" />
                        <line x1="50" y1="350" x2="50" y2="50" stroke="#cbd5e1" strokeWidth="2" />

                        {/* Gradient Definitions */}
                        <defs>
                            <linearGradient id="gradientHigh" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#1e9cd7" />
                                <stop offset="100%" stopColor="#005d9a" />
                            </linearGradient>
                            <linearGradient id="gradientLow" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#94a3b8" />
                                <stop offset="100%" stopColor="#64748b" />
                            </linearGradient>

                            {/* Glow Filters */}
                            <filter id="glowHigh" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Lower Retention Curve (Decays faster) 
                Start: 50, 100 (High earnings)
                End: 950, 320 (Low earnings relative to start)
                Control points to create a smooth decay curve
            */}
                        <motion.path
                            d="M 50,100 C 250,120 500,250 950,320"
                            fill="none"
                            stroke="url(#gradientLow)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Label for Lower Retention - positioned near the end of the line */}
                        <motion.text
                            x="940"
                            y="280"
                            fill="#64748b"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="end"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            Lower Retention
                        </motion.text>


                        {/* Higher Retention Curve (Decays slower / Stays higher) 
                Start: 50, 100
                End: 950, 180 (Significantly higher than the other line)
            */}
                        <motion.path
                            d="M 50,100 C 350,100 650,120 950,180"
                            fill="none"
                            stroke="url(#gradientHigh)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            filter="url(#glowHigh)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Label for Higher Retention */}
                        <motion.text
                            x="940"
                            y="140"
                            fill="#005d9a"
                            fontSize="16"
                            fontWeight="bold"
                            textAnchor="end"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                        >
                            Higher Retention
                        </motion.text>

                        {/* Area under Higher Retention (Optional subtle fill) */}
                        <motion.path
                            d="M 50,100 C 350,100 650,120 950,180 L 950,350 L 50,350 Z"
                            fill="url(#gradientHigh)"
                            fillOpacity="0.05"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} // Increase opacity slightly
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5 }}
                        />

                    </svg>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-[#005d9a] rounded-full shadow-[0_0_10px_rgba(30,156,215,0.5)]"></div>
                            <span className="font-semibold text-gray-700">FHI High Retention Model</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-gray-400 border-dashed border-t-2 border-transparent" style={{ backgroundImage: 'linear-gradient(to right, #94a3b8 50%, transparent 50%)', backgroundSize: '10px 2px', backgroundRepeat: 'repeat-x' }}></div>
                            <span className="font-semibold text-gray-500">Standard Attrition</span>
                        </div>
                    </div>
                </div>



                {/* Explanation Card */}
            </div>

            {/* Explanation Card - Now static in flow */}
            <div className="mt-12 w-full max-w-xl mx-auto">
                <div className="glass-card p-6 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg animate-fade-in-up animation-delay-1000">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50/50 rounded-full text-[#005d9a]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#005d9a] mb-1">Why this matters</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Higher retention means compounding growth. By keeping clients happy and engaged, your book of business maintains its value, ensuring consistent annual payouts year after year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
