import { Navigation } from 'app-navigation';
import LocalizationProvider from './app/utils/localization/LocalisationContext';
import React from 'react';

const App = () => {
  return (
    <LocalizationProvider>
      <Navigation />
    </LocalizationProvider>
  );
};

export default App;
