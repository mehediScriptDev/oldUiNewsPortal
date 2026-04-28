import React from 'react';

async function getNewsDetail(id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    if (!res.ok) throw new Error('Failed to fetch news details');
    const json = await res.json();
    return json;
}

export default async function Page({ params }) {
    const { id } = params;
    let newsResponse;
    try {
        newsResponse = await getNewsDetail(id);
    } catch (err) {
        console.error('Error fetching news details:', err);
        return (
            <div className="max-w-3xl mx-auto p-4">
                <p className="text-red-600">Failed to load news details.</p>
            </div>
        );
    }

    const news = newsResponse?.data?.[0];

    if (!news) {
        return (
            <div className="max-w-3xl mx-auto p-4">
                <p>No news found for id: {id}</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">{news.title}</h1>

            <div className="flex items-center gap-4 mb-4">
                {news.author?.img ? (
                    
                    <img
                        src={news.author.img}
                        alt={news.author?.name || 'Author'}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                )}

                <div>
                    <p className="font-semibold">{news.author?.name || 'Unknown'}</p>
                    <p className="text-sm text-gray-500">{news.author?.published_date}</p>
                </div>
            </div>

           
        </div>
    );
}