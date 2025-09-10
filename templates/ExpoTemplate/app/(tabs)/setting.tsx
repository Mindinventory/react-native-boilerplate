import React from 'react';
import { Stack } from 'expo-router';

import { SettingScreen } from '@src/screens';

export default function SettingTab() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SettingScreen />
    </>
  );
}
