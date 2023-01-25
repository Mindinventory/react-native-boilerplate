import React from 'react';
import { Navigation } from 'app-navigation';
import { AppContextProvider } from 'app-contexts';

const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
};

export default App;
