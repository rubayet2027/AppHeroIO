import { useContext } from 'react';
import InstalledContext from './InstalledContext';

export const useInstalled = () => {
  const ctx = useContext(InstalledContext);
  if (!ctx) throw new Error('useInstalled must be used within an InstalledProvider');
  return ctx;
};

export default useInstalled;
