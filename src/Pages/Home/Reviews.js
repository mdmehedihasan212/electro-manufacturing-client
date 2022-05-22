import React from 'react';
import banner from '../../assets/Banner/banner-1.webp';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-4xl text-center my-12'>Reviews</h1>
            <div class="carousel w-full" style={{
                background: `url(${banner})`,
                backgroundSize: 'cover'
            }}>
                <div id="item1" class="carousel-item w-full">
                    <div class="hero min-h-screen">
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <div class="avatar">
                                    <div class="w-24 mask mask-squircle">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <h1 class="mb-5 text-5xl font-bold"> Kaisinger </h1>
                                <p class="mb-5">The goods have been well received! We are really satisfied with the service of International AElectriX. They help us to clear our confusion when choosing the products, fast delivery, and good after sales service.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" class="carousel-item w-full">
                    <div class="hero min-h-screen">
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <div class="avatar">
                                    <div class="w-24 mask mask-squircle">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full">
                    <div class="hero min-h-screen">
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <div class="avatar">
                                    <div class="w-24 mask mask-squircle">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" class="carousel-item w-full">
                    <div class="hero min-h-screen">
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <div class="avatar">
                                    <div class="w-24 mask mask-squircle">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
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