import React from 'react';
import news1 from '../../assets/News/news-1.jpg';
import news2 from '../../assets/News/news-2.jpg';
import news3 from '../../assets/News/news-3.jpg';
import NewsCard from './NewsCard';

const News = () => {
    const latestNews = [
        {
            _id: 1,
            img: news1,
            name: 'Meatloaf Kielbasa Meatball T-bone Andouille Pork',
            description: 'Frankfurter cupim rump burgdoggen. Pork ham hock beef ribs pancetta prosciutto sirloin filet mignon.'
        },
        {
            _id: 2,
            img: news2,
            name: 'Meatloaf Kielbasa Meatball T-bone Andouille Pork',
            description: 'Frankfurter cupim rump burgdoggen. Pork ham hock beef ribs pancetta prosciutto sirloin filet mignon.'
        },
        {
            _id: 3,
            img: news3,
            name: 'Meatloaf Kielbasa Meatball T-bone Andouille Pork',
            description: 'Frankfurter cupim rump burgdoggen. Pork ham hock beef ribs pancetta prosciutto sirloin filet mignon.'
        }
    ]

    return (
        <div>
            <h1 className='text-5xl text-center my-12'>Latest News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 mb-12 gap-6'>
                {
                    latestNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default News;