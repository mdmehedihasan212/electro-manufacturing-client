import React from 'react';
import { useQuery } from 'react-query';
import ToolCard from './ToolCard';

const Tools = () => {

    const { isLoading, error, data: tools } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    console.log(tools);
    if (isLoading) {
        return;
    }

    if (error) {
        console.log(error);
    }

    return (
        <div className='px-12'>
            <h1 className='text-5xl font-bold text-center text-primary my-6'>Tools: {tools.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    tools?.map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;