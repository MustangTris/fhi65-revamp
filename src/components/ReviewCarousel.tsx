"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        id: 1,
        text: "Outstanding communication, interpretation and overall knowledge of a somewhat complex system. Sharp Team and we highly recommend them.",
        author: "Larry Adams",
        time: "6 months ago",
    },
    {
        id: 2,
        text: "We really appreciate the care, knowledge and information the Foulds Health Insurance Agency presented to us. You will be in good hands with this business.",
        author: "Marie T",
        time: "a year ago",
    },
    {
        id: 3,
        text: "Randy was an outstanding person who helped me tremendously navigate my understanding of medicare and supplemental options open to me! He was caring, supportive and professional to me when I needed it most.",
        author: "Carol Bailey",
        time: "5 months ago",
    },
];

export default function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
                {/* Star Rating */}
                <div className="flex text-[#1e9cd7]">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className="w-5 h-5 fill-current drop-shadow-sm"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Trusted by Locals
                </span>
            </div>

            <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <p className="text-gray-700 italic mb-6 leading-relaxed text-lg font-medium">
                            &quot;{reviews[currentIndex].text}&quot;
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-200/50 pt-4">
                            <span className="font-bold text-[#005d9a]">
                                {reviews[currentIndex].author}
                            </span>
                            <span className="text-sm text-gray-500">{reviews[currentIndex].time}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-4 absolute bottom-6 left-0 right-0">
                {reviews.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-[#1e9cd7]" : "w-1.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

