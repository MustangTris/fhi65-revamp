'use client';

export const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-50] pointer-events-none bg-[#f0f9ff]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2ebff] via-[#e0f2fe] to-[#f0f9ff]" />
        </div>
    );
};
