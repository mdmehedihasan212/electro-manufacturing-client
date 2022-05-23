import React from 'react';
import useTools from '../../hooks/useTools';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools] = useTools();

    return (
        <div className='px-12'>
            <h1 className='text-5xl font-bold text-center text-primary my-6'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    tools.map((tool) => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;