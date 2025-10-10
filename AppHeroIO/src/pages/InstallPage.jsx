import React, { useEffect, useState } from 'react';
import { useInstalled } from '../context/useInstalled';
import { toast, Toaster } from 'react-hot-toast';

const InstallPage = () => {
  const { installedApps, uninstallApp } = useInstalled();
  const [filteredInstalled, setFilteredInstalled] = useState(installedApps || []);
  const [sortOrder, setSortOrder] = useState('');

  const handleUninstall = (id, title) => {
    uninstallApp(id);
    toast.success(`${title} uninstalled`);
  };

  useEffect(() => {
      let filtered = [...installedApps];

      if (sortOrder === 'asc' || sortOrder === 'desc') {
          filtered = filtered.slice().sort((a, b) => {
              const parseDownloads = (value) => {
                  if (!value) return 0;
                  let str = String(value).trim().toUpperCase();

                  let num = parseFloat(str.replace(/[^0-9.]/g, '')) || 0;

                  if (str.includes('B')) num *= 1_000_000_000;
                  else if (str.includes('M')) num *= 1_000_000;
                  else if (str.includes('K')) num *= 1_000;

                  return num;
              };

              const aNum = parseDownloads(a.downloads);
              const bNum = parseDownloads(b.downloads);

              return sortOrder === 'asc' ? aNum - bNum : bNum - aNum;
          });
      }


    setFilteredInstalled(filtered);
  }, [installedApps, sortOrder]);

  return (
    <div className="mt-20">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-4xl font-bold text-center my-4 text-[#001931]">
        Your Installed Apps
      </h2>
      <p className="text-center text-gray-600">
        Apps you installed are stored locally and visible here.
      </p>

      <div className="max-w-[1175px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center px-2 gap-4">
        <div className="text-[25px] font-bold">
          ({filteredInstalled.length}) Apps Found
        </div>

        <div className="ml-2">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-sm"
          >
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div className="max-w-[1175px] mx-auto w-full mt-4 grid grid-cols-1 gap-6 px-4 mb-7">
        {filteredInstalled.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No apps installed.
          </div>
        ) : (
          filteredInstalled.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-xl rounded-lg p-4 flex items-center justify-between w-full col-span-full sm:col-auto"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-md bg-gray-100 object-contain"
                />
                <div>
                  <div className="font-semibold text-lg text-[#001931]">
                    {app.title}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1 text-[#00D390] font-semibold">
                      <img
                        src="/src/assets/assets/icon-downloads.png"
                        alt="downloads"
                        className="w-3 h-3"
                      />
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-[#FF8811] font-semibold">
                      <img
                        src="/src/assets/assets/icon-ratings.png"
                        alt="ratings"
                        className="w-3 h-3"
                      />
                      {app.ratingAvg}
                    </span>
                    <span className="text-gray-400 font-semibold">
                      {app.size}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-sm btn-success text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InstallPage;
