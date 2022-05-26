import React from 'react';
import useTools from '../../hooks/useTools';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
    const [tools] = useTools([]);

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tools.map((product, index) => <ManageProductCard
                            key={product._id}
                            product={product}
                            index={index}
                        ></ManageProductCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;