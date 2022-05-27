import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('review', () =>
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/review`).then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-4xl text-center my-12'>Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto px-12">
                {
                    reviews?.slice(0, 8).map(userReview => <ReviewCard
                        key={userReview._id}
                        userReview={userReview}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;