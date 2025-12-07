"use client";

import { useEffect, useState } from 'react';


interface Review {
    author_name: string;
    profile_photo_url: string | null;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

interface ReviewsData {
    reviews: Review[];
    rating: number;
    user_ratings_total: number;
}

export default function GoogleReviews() {
    const [data, setData] = useState<ReviewsData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await fetch('/api/reviews');
                if (!res.ok) throw new Error('Failed to fetch reviews');
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#005d9a]"></div>
            </div>
        );
    }

    if (!data || !data.reviews) {
        return null; // Or return a fallback UI
    }

    return (
        <section className="w-full py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold text-[#005d9a]">
                        Trusted by Our Community
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-gray-800">{data.rating}</span>
                        <div className="flex text-[#FFD700]"> {/* Google Gold color for stars */}
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-6 h-6 ${i < Math.round(data.rating) ? 'fill-current' : 'text-gray-300 fill-current'}`}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Based on {data.user_ratings_total} reviews on Google
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.reviews.slice(0, 3).map((review, index) => ( // Display top 3 reviews
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {review.profile_photo_url ? (
                                    <img
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-[#005d9a] text-white flex items-center justify-center font-bold text-lg">
                                        {review.author_name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.author_name}</h4>
                                    <div className="flex text-[#FFD700] text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-current'}`}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="ml-auto text-xs text-gray-500">{review.relative_time_description}</span>
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="Google"
                                    className="w-4 h-4"
                                />
                                <span className="text-xs text-gray-500 font-medium">Posted on Google</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/maps/place/Foulds+Health+Insurance+Agency/@33.677402,-116.3055446,17z/data=!4m8!3m7!1s0x80dafddfcc1e756d:0xbd23f3d68e55a6b5!8m2!3d33.6773976!4d-116.3029643!9m1!1b1!16s%2Fg%2F1thr7gdt?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-[#005d9a] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-md border border-gray-200"
                    >
                        See All Reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
}
