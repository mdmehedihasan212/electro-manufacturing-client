import React from 'react';
import news1 from '../../assets/News/saw-blade.jpg';
import news2 from '../../assets/News/Cordles.jpg';
import news3 from '../../assets/News/Sliding Miter.jpg';
import NewsCard from './NewsCard';

const News = () => {
    const latestNews = [
        {
            _id: 1,
            img: news1,
            name: 'Reciprocating Saw 20 V',
            description: 'Highly Efficient Cutting & Cordless Design 20V cordless reciprocating saw for wood with a 0.6-inch stroke removes more material for more efficient cutting. Lightweight hand saw w/ high-speed motor provides superior efficiency and control.'
        },
        {
            _id: 2,
            img: news2,
            name: 'Brad Nailer 20 V',
            description: 'Advanced drive system/powerful penetration PHALANX 20V cordless brad nailer adopts spiral-drive technology. Different decoration scenes apply tool-less six-bit depth adjustable function to achieve accurate penetration in every scene.'
        },
        {
            _id: 3,
            img: news3,
            name: 'Sliding Miter Saw 30 V',
            description: '3 Blades & Powerful Motor: The ENGiNDOT sliding miter saw comes with 3 blades, two 10" 40T TCT blades for wood and plastic, and one multi-functional 10" 48T TCT blade for versatile use. Richer accessories provide a wide range of choice for your operation.'
        }
    ]

    return (
        <div>
            <h1 className='text-5xl text-center my-12 text-primary'>Latest News</h1>
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