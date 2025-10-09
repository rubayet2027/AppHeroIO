import React from 'react';
import Card from './Card';

const AllApps = ({ apps }) => {

    return (
        <div className='m-10'>
            <div className="max-w-[1175px] mx-auto my-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {apps.map(app => (
                    <Card key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default AllApps;