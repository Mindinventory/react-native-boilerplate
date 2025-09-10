import React from 'react';

import { Stack } from 'expo-router';

import { NewsDetailScreen } from '@src/screens';

export default function NewsDetail() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <NewsDetailScreen />
    </>
  );
}
