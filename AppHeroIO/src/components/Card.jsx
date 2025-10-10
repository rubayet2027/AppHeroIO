import React from 'react';
import download from '../assets/assets/icon-downloads.png';
import ratings from '../assets/assets/icon-ratings.png'; 
const Card = ({app}) => {
    return (
        <div>
            <div className="card bg-base-100 w-70 h-90 shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300 rounded-xl">
                <figure className="px-4 pt-4 h-[80%]">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-[5px] h-full w-full object-contain"
                    />
                </figure>
                <div className="card-body items-left text-center">
                    <h2 className="card-title text-lg font-semibold">{app.title}</h2>
                    <div className='w-full flex justify-between items-center mt-3'>
                        <div className='flex gap-2 items-center bg-[#F1F5E8] p-1 rounded'>
                            <img src={download} alt="downloads" className='w-4 h-4' />
                            <span className='text-[#00D390] font-semibold'>{app.downloads.toLocaleString()}</span>
                        </div>
                        <div className='flex gap-2 items-center bg-[#F1F5E8] p-1 rounded'>
                            <img src={ratings} alt="ratings" className='w-4 h-4' />
                            <span className='text-[#FF8811] font-semibold'>{app.ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;