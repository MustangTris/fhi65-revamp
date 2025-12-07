'use client';

export const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* 1. Base Gradient Layer - White to Pale Blue */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#d2ebff] to-[#f0f9ff] opacity-100"
            />

            {/* 2. Glow Highlights - Brand Colors */}
            {/* Top Left - Pale/Vibrant Blue mix */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#d2ebff] opacity-60 blur-[120px]"
            />

            {/* Center/Right - Vibrant Blue accent */}
            <div
                className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1e9cd7] opacity-10 blur-[100px]"
            />

            {/* Bottom Left - Pale Blue */}
            <div
                className="absolute bottom-[-20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d2ebff] opacity-50 blur-[100px]"
            />

            {/* 3. Noise Layer - Subtle for Light Mode */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </div>
    );
};
