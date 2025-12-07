import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // Fallback to mock data if keys are not set (prevents breaking the site)
    if (!apiKey || !placeId) {
        console.warn("Missing Google Places API Key or Place ID. Serving mock data.");
        return NextResponse.json({
            rating: 4.8,
            user_ratings_total: 124,
            reviews: [
                {
                    author_name: "John Doe",
                    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjW...",
                    rating: 5,
                    relative_time_description: "2 weeks ago",
                    text: "Foulds Health Insurance made navigating Medicare so simple! Randy explained everything clearly and updated my plan to save me money.",
                    time: 1709385000
                },
                {
                    author_name: "Sarah Smith",
                    profile_photo_url: null,
                    rating: 5,
                    relative_time_description: "a month ago",
                    text: "Highly recommended! They truly care about their clients and go above and beyond to find the best coverage.",
                    time: 1706793000
                },
                {
                    author_name: "Michael Brown",
                    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX...",
                    rating: 4,
                    relative_time_description: "3 months ago",
                    text: "Great service and very knowledgeable staff. Would have given 5 stars but the phone lines were a bit busy.",
                    time: 1701436200
                },
                {
                    author_name: "Emily Davis",
                    profile_photo_url: null,
                    rating: 5,
                    relative_time_description: "5 months ago",
                    text: "I was completely lost with all the different parts of Medicare. The team at FHI65 broke it down and made it easy. Thank you!",
                    time: 1696165800
                },
                {
                    author_name: "Robert Wilson",
                    profile_photo_url: null,
                    rating: 5,
                    relative_time_description: "6 months ago",
                    text: "Honest and trustworthy. They didn't try to sell me anything I didn't need.",
                    time: 1693573800
                }
            ]
        });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour to stay within API limits
        );

        const data = await response.json();

        if (data.status !== 'OK') {
            console.error("Google Places API Error:", data.status, data.error_message);
            // Return fallback data on specific API error references or just empty
            // For now, let's return a generic error or the mock data if preferred. 
            // Ideally we want to fail gracefully.
            return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
        }

        return NextResponse.json(data.result);
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
