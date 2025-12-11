'use client';

export const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            {/* Base Background Color */}
            <div className="absolute inset-0 bg-[#f0f9ff]" />

            {/* Base Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2ebff]/40 via-[#e0f2fe]/40 to-[#f0f9ff]/40" />

            {/* Top Right - Vibrant Blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-[#1e9cd7] rounded-full blur-[100px] opacity-20" />

            {/* Bottom Left - Dark Blob */}
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[800px] h-[800px] bg-[#005d9a] rounded-full blur-[100px] opacity-15" />

            {/* Top Left - Pale Blob */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] -ml-20 -mt-20 bg-[#d2ebff] rounded-full blur-[80px] opacity-40" />
        </div>
    );
};
