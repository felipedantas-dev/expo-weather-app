
import Routes from './src/navigation/routes';
import {useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_600SemiBold, Inter_800ExtraBold} from '@expo-google-fonts/inter';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import LocationProvider from "./src/contexts/location"

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_600SemiBold, Inter_800ExtraBold
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
      <LocationProvider>
        <StatusBar style="light" animated={true} backgroundColor="#327d96" />
        <Routes onLayoutRootView={onLayoutRootView}/>
      </LocationProvider>
    </>
  );
}