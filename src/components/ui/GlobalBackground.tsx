'use client';

export const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-50] pointer-events-none bg-[#f0f9ff] overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2ebff]/20 via-[#e0f2fe]/20 to-[#f0f9ff]/20" />

            {/* Top Right - Vibrant Blob */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[#1e9cd7] rounded-full blur-[120px] opacity-10" />

            {/* Bottom Left - Dark Blob */}
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-[#005d9a] rounded-full blur-[120px] opacity-5" />

            {/* Top Left - Pale Blob */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d2ebff] rounded-full blur-[100px] opacity-30" />
        </div>
    );
};
