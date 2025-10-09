import React from 'react';
import heroImage from '../assets/assets/hero.png';
import playstore from '../assets/assets/app.png';
import appstore from '../assets/assets/app-store.png';
import TrendingApps from '../components/TrendingApps';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <section className="bg-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    We Build <br /><div className='text-6xl'><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</div>
                </h1>
                
                <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
                    At AppHero.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>
                
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition font-bold"
                    >
                        <img src={playstore} title="playstore icons" className='w-4 h-4' alt="Google Play" /> Google Play
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition font-bold"
                    >
                        <img src={appstore} title="appstore icons" className='w-4 h-4' alt="App Store" /> App Store
                    </a>
                </div>

                
                <div className="relative mt-12">
                    <img
                        src={heroImage}
                        alt="App Preview"
                        className="mx-auto w-[500px] md:w-[600px] lg:w-[700px] relative z-10"
                    />
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 flex flex-col items-center">
                <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                        Trusted By Millions, Built For You
                    </h1>

                    <div className="mt-8 flex flex-col md:flex-row justify-around items-center gap-8">
                        {/* Total Downloads */}
                        <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/3 text-center">
                            <p className="text-base sm:text-lg md:text-base lg:text-lg">Total Downloads</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">29.6M</h2>
                            <p className="mt-2 text-sm sm:text-[15px] opacity-80">21% More Than Last Month</p>
                        </div>

                        {/* Total Reviews */}
                        <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/3 text-center">
                            <p className="text-base sm:text-lg md:text-base lg:text-lg">Total Reviews</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">906K</h2>
                            <p className="mt-2 text-sm sm:text-[15px] opacity-80">46% More Than Last Month</p>
                        </div>

                        {/* Active Apps */}
                        <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/3 text-center">
                            <p className="text-base sm:text-lg md:text-base lg:text-lg">Active Apps</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">132+</h2>
                            <p className="mt-2 text-sm sm:text-[15px] opacity-80">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'> 
                <div className='py-10 flex flex-col items-center'>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] text-center">Trending Apps</h1>
                    <p className='mt-5 text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-xl text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <TrendingApps />

                <div className="my-5">
                    <NavLink
                        to="apps"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg text-center hover:scale-105 transition-transform duration-200"
                    >
                        Show All
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Home;