import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toast, Toaster } from "react-hot-toast";
import NotFoundApp from "./NotFoundApp";
import { useInstalled } from '../context/useInstalled';
import download from '../assets/assets/icon-downloads.png';
import ratings from '../assets/assets/icon-ratings.png';
import review from '../assets/assets/icon-review.png';


const AppDetails = ({ app: propApp, onGoBack }) => {
  const { installApp, isInstalled } = useInstalled();
  const [installed, setInstalled] = useState(false);
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(state?.app || propApp || null);
  const [loading, setLoading] = useState(!app);

  useEffect(() => {
    if (!app && id) {
      setLoading(true);
      fetch('/Apps.json')
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((a) => String(a.id) === String(id));
          setApp(found || null);
        })
        .catch(() => setApp(null))
        .finally(() => setLoading(false));
    }
  }, [id, app]);

  useEffect(() => {
    if (app) setInstalled(isInstalled(app.id));
  }, [app, isInstalled]);

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };


  if (loading) return <div className="p-8 text-center">Loading app…</div>;
  if (!app) return <div className="p-8 text-center"><NotFoundApp /></div>;

const chartData = [...app.ratings].reverse().map(rating => ({
  name: rating.name,
  value: rating.count,
}));


  return (
    <div className="max-w-5xl mx-auto p-6">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col md:flex-row items-center md:items-start p-4 rounded-lg gap-6 border-b-2 border-[#E5E7EB] pb-4">
        <img
          src={app.image}
          alt={app.title}
          className="w-50 h-50 object-contain rounded-lg"
        />
        <div className="flex-1 ">
          <div className="border-b-2 border-[#E5E7EB]">
            <h1 className="text-3xl font-bold mb-2 text-[#001931]">{app.title}</h1>
            <p className="text-md text-[#627382] mb-5">
              Developed by{" "}
              <a href={app.companyName} className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.companyName}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-20 text-center mt-4 mb-5">
            <div className="flex flex-col items-start text-left">
              <img src={download} alt="downloads" className="w-8 h-8" />
              <p className="text-md text-[#627382] mb-1">Downloads</p>
              <p className="text-[#001931] text-3xl font-bold">{app.downloads}</p>
            </div>
            <div className="flex flex-col items-start text-left">
              <img src={ratings} alt="ratings" className="w-8 h-8" />
              <p className="text-md text-[#627382] mb-1">Average Rating</p>
              <p className="text-[#001931] text-3xl font-bold">{app.ratingAvg}</p>
            </div>
            <div className="flex flex-col items-start text-left">
              <img src={review} alt="reviews" className="w-8 h-8" />
              <p className="text-md text-[#627382] mb-1">Total Reviews</p>
              <p className="text-[#001931] text-3xl font-bold">{app.reviews}</p>
            </div>
            
          </div>
          <div className="flex items-center justify-between gap-20">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`btn px-3 py-1.5 text-white flex items-center justify-center gap-2 h-10 ${installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#09a070]"
                }`}
            >
              {installed ? "Installed ✓" : `Install Now (${app.size})`}
            </button>

            <button
              onClick={() => (onGoBack ? onGoBack() : navigate(-1))}
              className="btn px-3 py-1.5 h-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center justify-center gap-2"
            >
              ← Go Back
            </button>
          </div>

        </div>
      </div>
      <div className="mt-10 border-b-2 border-[#E5E7EB] pb-4 rounded-lg">
        <h2 className="text-[#001931] text-3xl font-bold mb-7">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#FF8C00" barSize={30} />
          </BarChart>
        </ResponsiveContainer>

      </div>
      <div className="mt-8">
        <h2 className="font-bold mb-4">Description</h2>
        {app.description?.split("\n").map((para, i) => (
          <p key={i} className="text-gray-700 mb-3 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AppDetails;
