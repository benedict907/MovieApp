import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, View} from 'react-native';

import Dashboard from '../screens/Dashboard';
import DetailsScreen from '../screens/DetailsScreen';
import {useAuth} from '../storage/AuthContext';
import {SafeAreaView} from 'react-native-safe-area-context';

export type AppNavigationStack = {
  Dashboard: undefined;
  DetailsScreen: {movie: MovieItem};
};

const Stack = createNativeStackNavigator<AppNavigationStack>();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
);

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default MainNavigation;
