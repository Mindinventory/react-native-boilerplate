import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppStack from './appStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
