
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Foulds Health Insurance | Medicare Enrollment Made Simple'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // Font loading
    const interSemiBold = await fetch(
        new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff2', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#005d9a',
                    backgroundImage: 'linear-gradient(135deg, #005d9a 0%, #1e9cd7 100%)',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transform: 'translateY(-10px)',
                    }}
                >
                    {/* Logo Placeholder / Icon */}
                    <div style={{
                        fontSize: 60,
                        marginBottom: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: 100,
                        height: 100,
                        color: '#005d9a',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
                    }}>
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>

                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 600,
                            margin: '0 0 20px 0',
                            textAlign: 'center',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.1,
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        Foulds Health Insurance
                    </h1>

                    <p
                        style={{
                            fontSize: '32px',
                            margin: 0,
                            opacity: 0.9,
                            fontWeight: 600,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            padding: '10px 30px',
                            borderRadius: '50px',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        Medicare Enrollment Made Simple
                    </p>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    display: 'flex',
                    alignItems: 'center',
                    opacity: 0.8,
                    fontSize: '20px',
                    fontWeight: 600
                }}>
                    Serving La Quinta & Coachella Valley
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: interSemiBold,
                    style: 'normal',
                    weight: 600,
                },
            ],
        }
    )
}
