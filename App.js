import React from 'react';

import {Poppins_700Bold, Poppins_300Light, Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

export default function App() {

  const [fontsValided] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold
  });


  if (!fontsValided) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}
