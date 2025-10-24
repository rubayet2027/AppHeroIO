import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const TrendingApps = () => {
    const [allApps, setAllApps] = React.useState([]);

    React.useEffect(() => {
        fetch('/Apps.json')
            .then(response => response.json())
            .then(data => setAllApps(data));
    }, []);

    const navigate = useNavigate();

  const handleCardClick = (app) => {
    navigate(`/apps/${app.id}`, { state: { app } });
  };

    return (
        <div className='m-10'>
            <div className="max-w-[1175px] mx-auto my-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allApps.slice(0, 8).map(app => (
                    <div key={app.id} onClick={() => handleCardClick(app)} className="cursor-pointer">
                        <Card app={app} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingApps;