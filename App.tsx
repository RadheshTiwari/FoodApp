/* eslint-disable @typescript-eslint/no-shadow */

import React, { FC } from 'react';
// import MainNavigation from './src/navigation/navigation';
import RootNavigation from './src/navigation/navigation';



const App: FC = () => {
  // const ParentComponent: ParentComponent = Platform.OS === commonConstant.ANDROID ? View : SafeAreaView
  return (
    <RootNavigation />
  );
};

export default App;
