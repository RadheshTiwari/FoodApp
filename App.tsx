/* eslint-disable @typescript-eslint/no-shadow */

import React, { FC } from 'react';

import RootNavigation from './src/navigation/navigation';
import { Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const App: FC = () => {
  const ParentComponent = Platform.OS === "android" ? View : SafeAreaProvider;
  return (
    <ParentComponent style={{flex:1}}>
      <RootNavigation />
      </ParentComponent>

  );
};

export default App;
