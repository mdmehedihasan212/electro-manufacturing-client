import React from 'react';

const Blogs = () => {

    const products = [
        {
            name: 'Galaxy A13',
            price: '20000tk',
            description: "Expand your view to the 6.6-inch Infinity-V Display of Galaxy A13 and see what you've been missing. And with FHD+ technology, your everyday content looks sharp, crisp and clear."
        },
        {
            name: 'Galaxy A52s 5G',
            price: '25000tk',
            description: 'On the next-generation mobile data network, the power of 5G fast speeds changes the way you experience and share content — from super smooth gaming and streaming, to ultra-fast sharing and downloading. Upgrade to the Galaxy A52s 5G and speed up your smartphone experience.'
        },
        {
            name: 'Galaxy A52s 5G',
            price: '30000tk',
            description: 'The 5,000mAh (typical)² battery gives you more time to do what you love—streaming, sharing, gaming and more. AI power management detects and adjusts to your mobile usage habits for long-lasting power. And with up to 25W of Super Fast Charging, Galaxy A72 gets back to full power, quickly.'
        }
    ];



    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-center p-12'>
            <div>
                <h1 className='text-2xl max-w-xl mx-auto font-bold mb-2'>How will you improve the performance of a React Application?</h1>
                <p className='max-w-xl mx-auto'>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.</p>
                <ul>
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl max-w-xl mx-auto font-bold mb-2'>What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <ul className='max-w-xl mx-auto'>
                    <li>Local state: Local state is data we manage in one or another component.</li>
                    <li>Global state: Global state is data we manage across multiple components.</li>
                    <li>Server state: Data that comes from an external server that must be integrated with our UI state.</li>
                    <li>URL state: Data that exists on our URLs, including the pathname and query parameters.</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>How does prototypical inheritance work?</h1>
                <p className='max-w-xl mx-auto'>JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>Why you do not set the state directly in React?</h1>
                <ul className='max-w-xl mx-auto'>
                    <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                    <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                    <li>You will lose control of the state across all components.</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl max-w-xl mx-auto font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

            </div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>What is a unit test?</h1>
                <p className='max-w-xl mx-auto'>This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces</p>
                <h1 className="text-2xl font-bold mb-2">Why should write unit tests?</h1>
                <p className='max-w-xl mx-auto'>Unit tests are also especially useful when it comes to refactoring or re-writing a piece a code. If you have good unit tests coverage, you can refactor with confidence. Without unit tests, it is often hard to ensure the you didn't break anything</p>
            </div>
        </div>
    );
};

export default Blogs;