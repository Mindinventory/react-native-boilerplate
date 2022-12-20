import React from 'react';
import { Navigation } from 'app-navigation';
import { LocalizationProvider } from 'app-utils';

const App = () => {
  return (
    <LocalizationProvider>
      <Navigation />
    </LocalizationProvider>
  );
};

export default App;
