import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import {AuthProvider} from './src/storage/AuthContext';
import {enableScreens} from 'react-native-screens';

enableScreens();
const App = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
};

export default App;
