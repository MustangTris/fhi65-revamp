import Link from "next/link";
import Parser from "rss-parser";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Insights",
    description: "Stay informed with the latest updates on Medicare, health insurance, and wellness from our expert team. Read articles from Don Akchin and more.",
    alternates: {
        canonical: '/news',
    },
};

interface Article {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    link: string;
    image: string | null;
}

async function getMediumArticles(): Promise<Article[]> {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@don-53849');

        return feed.items.map((item) => {
            // Extract image from content
            const content = item['content:encoded'] || item.content || '';
            const imageMatch = content.match(/<img[^>]+src="([^">]+)"/);
            const image = imageMatch ? imageMatch[1] : null;

            // Create excerpt (strip HTML and truncate)
            const textContent = content.replace(/<[^>]+>/g, '');
            const excerpt = textContent.slice(0, 150) + '...';

            return {
                id: item.guid || item.link || Math.random().toString(),
                title: item.title || 'Untitled',
                excerpt: excerpt,
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : '',
                category: item.categories && item.categories.length > 0 ? item.categories[0] : 'Insight',
                link: item.link || '#',
                image: image
            };
        });
    } catch (error) {
        console.error('Error fetching Medium articles:', error);
        return [];
    }
}

export default async function NewsPage() {
    const articles = await getMediumArticles();

    return (
        <div className="min-h-screen py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#005d9a] mb-6">News & Insights</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest updates on Medicare, health insurance, and wellness.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="glass-card rounded-2xl shadow-sm border border-white/40 p-8 text-center">
                        <h2 className="text-2xl font-bold text-[#005d9a] mb-4">Randy&apos;s Recommended Reads</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            This is a curation of authors that Randy has personally recommended in the insurance field. He avidly reads their work concerning subjects like Medicare and related healthcare topics.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((post) => (
                        <article key={post.id} className="glass-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/40 flex flex-col hover:-translate-y-1">
                            <div className="h-48 bg-gray-100 w-full relative overflow-hidden">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                        [No Image]
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                    <span className="font-semibold text-[#1e9cd7] uppercase tracking-wider truncate max-w-[60%]">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#005d9a] mb-3 leading-tight hover:text-[#1e9cd7] transition-colors line-clamp-2">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                </h2>
                                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1e9cd7] font-semibold hover:text-[#005d9a] transition-colors">
                                    Read Article <span className="ml-2">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
