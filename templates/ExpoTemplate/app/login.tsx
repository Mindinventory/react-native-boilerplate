import React from 'react';

import { Stack } from 'expo-router';

import { LoginScreen } from '@src/screens';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginScreen />
    </>
  );
}
