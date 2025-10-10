import React, { createContext, useEffect, useState } from 'react';

const InstalledContext = createContext(null);

const STORAGE_KEY = 'installedApps';

export const InstalledProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(installedApps));
  }, [installedApps]);

  const isInstalled = (id) => installedApps.some((a) => String(a.id) === String(id));

  const installApp = (app) => {
    if (!app) return;
    if (isInstalled(app.id)) return;
    setInstalledApps((prev) => [...prev, app]);
  };

  const uninstallApp = (id) => {
    setInstalledApps((prev) => prev.filter((a) => String(a.id) !== String(id)));
  };

  return (
    <InstalledContext.Provider value={{ installedApps, installApp, uninstallApp, isInstalled }}>
      {children}
    </InstalledContext.Provider>
  );
};

export default InstalledContext;
