import React from 'react';

import {AppContextProvider} from 'app-contexts';
import {Navigation} from 'app-navigation';

const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
};

export default App;
