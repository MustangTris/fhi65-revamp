'use client';

export const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none bg-[#f0f9ff]">
            {/* 1. Base Gradient Layer - Pale Blue Base */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d2ebff] via-[#e0f2fe] to-[#f0f9ff] opacity-100"
            />

            {/* 2. Glow Highlights - Multiple Blue Blobs */}

            {/* Top Right - Vibrant Blue */}
            <div
                className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-[#1e9cd7] opacity-20 blur-[120px]"
            />

            {/* Top Left - Pale Blue/White-ish mix for light */}
            <div
                className="absolute top-[-5%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#d2ebff] opacity-40 blur-[100px]"
            />

            {/* Center Left - Deep Blue Accent */}
            <div
                className="absolute top-[40%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#005d9a] opacity-10 blur-[130px]"
            />

            {/* Bottom Right - Vibrant Blue */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1e9cd7] opacity-15 blur-[120px]"
            />

            {/* Bottom Center - Pale Blue */}
            <div
                className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#d2ebff] opacity-30 blur-[100px]"
            />

            {/* 3. Noise Layer - Texture (Optimized: Static Image instead of expensive SVG filter) */}
            <div
                className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url('/images/noise.png')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px'
                }}
            />
        </div>
    );
};
