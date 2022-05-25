import React from 'react';
import { useQuery } from 'react-query';
import banner from '../../assets/Banner/banner-1.webp';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/review`).then(res =>
            res.json()
        )
    )

    return (
        <div>
            <h1 className='text-4xl text-center my-12'>Reviews</h1>
            <div class="carousel w-full" style={{
                background: `url(${banner})`,
                backgroundSize: 'cover'
            }}>
                {
                    reviews?.map(review => <>
                        <div id="item1" class="carousel-item w-full">
                            <div class="hero min-h-screen">
                                <div class="hero-overlay bg-opacity-60"></div>
                                <div class="hero-content text-center text-neutral-content">
                                    <div class="max-w-md">
                                        <div class="avatar">
                                            <div class="w-24 rounded-full">
                                                <img src="https://api.lorem.space/image/face?hash=64318" alt='' />
                                            </div>
                                        </div>
                                        <h1 class="mb-5 text-2xl font-bold">{review.name}</h1>
                                        <p class="mb-5">{review.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }

            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Reviews;