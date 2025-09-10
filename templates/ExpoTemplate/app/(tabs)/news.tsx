import React from 'react';
import { Stack } from 'expo-router';

import { NewsListScreen } from '@src/screens';

export default function NewsTab() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <NewsListScreen />
    </>
  );
}
