import React from 'react';

import { Stack } from 'expo-router';

import { ForceUpdateScreen } from '@src/screens';

export default function ForceUpdate() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ForceUpdateScreen />
    </>
  );
}
