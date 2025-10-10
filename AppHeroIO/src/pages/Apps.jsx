import React, { lazy, Suspense, useEffect, useState } from 'react';
import NotFoundApp from './NotFoundApp';

const AllApps = lazy(() => import('../components/AllApps'));

export default function Apps() {
  const [allApps, setAllApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/public/Apps.json')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
        setAllApps(data);
        setFilteredApps(data);
        setLoading(false);
      }, 1000);
      })
  }, []);

  useEffect(() => {
    const filtered = allApps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [searchTerm, allApps]);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center my-4 text-[#001931]">Our All Applications</h2>
      <p className="text-center text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="max-w-[1175px] mx-auto my-auto w-full mt-20 flex flex-col md:flex-row justify-between items-center px-2 sm:px-2 lg:px-2 gap-4">
        <div className="text-[25px] font-bold">({filteredApps.length}) Apps Found</div>

        <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2 w-full max-w-sm shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Apps"
            className="flex-1 outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="my-4">
        {loading ? (
          <div className="flex justify-center mt-10">
            <span className="loading loading-dots loading-xl flex items-center justify-center"></span>
          </div>
        ) : filteredApps.length > 0 ? (
            <AllApps apps={filteredApps} />
        ) : (
          <NotFoundApp onGoBack={() => { setFilteredApps(allApps); setSearchTerm(''); }} />
        )}
      </div>

    </div>
  );
}
