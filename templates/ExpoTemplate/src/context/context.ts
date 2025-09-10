import { loader } from '@src/utils';

import { useLanguage } from './LocalizationContext';
import { storage } from './storage';
import { useColor } from './ThemeContext';
import { appServices } from '../services/appServices';

export const useAppContextOnly = () => {
  const color = useColor();
  const { ...language } = useLanguage();

  return {
    loader: loader,
    services: appServices,
    storage,
    ...color,
    ...language,
  };
};

export type AppContextType = ReturnType<typeof useAppContextOnly>;

export const useAppContext = (): AppContextType => {
  return useAppContextOnly();
};
