import { Navigation } from 'app-navigation';
import { LocalizationProvider } from 'app-utils';
import React from 'react';

const App = () => {
  return (
    <LocalizationProvider>
      <Navigation />
    </LocalizationProvider>
  );
};

export default App;
