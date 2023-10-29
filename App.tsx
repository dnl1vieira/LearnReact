import React, { Fragment } from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { SignIn } from "./src/Screens/SignIn";
import { Home } from "./src/Screens/Home";

import { Background } from './src/Components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Background>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent />
        <Home />
      </Background>
    );
  }
}