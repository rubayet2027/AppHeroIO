import React from 'react';
import Card from './Card';


const TrendingApps = () => {
    const [allApps, setAllApps] = React.useState([]);

    React.useEffect(() => {
        fetch('/public/Apps.json')
            .then(response => response.json())
            .then(data => setAllApps(data));
    }, []);

    return (
        <div className='m-10'>
            <div className="max-w-[1175px] mx-auto my-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allApps.slice(0, 8).map(app => (
                    <Card key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default TrendingApps;