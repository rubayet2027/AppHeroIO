import { useContext } from 'react';
import InstalledContext from './InstalledContext';

export const useInstalled = () => {
  const ctx = useContext(InstalledContext);
  return ctx;
};

export default useInstalled;
