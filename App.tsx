import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Splash from './src/onboarding/Splash';
import GetStarted from './src/onboarding/GetStarted';
import Onboarding01 from './src/onboarding/Onboarding01';
import Onboarding02 from './src/onboarding/Onboarding02';
import Onboarding03 from './src/onboarding/Onboarding03';
import Login from './src/authentication/Login';
import SignUp from './src/authentication/SignUp';
import FoodDetail from './src/main/FoodDetail';

export type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  Onboarding01: undefined;
  Onboarding02: undefined;
  Onboarding03: undefined;
  Login: undefined;
  SignUp: undefined;
  MainTabs: undefined;
  FoodDetail: { foodId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1E3A8A',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
          }}
        >
          <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="GetStarted" 
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Onboarding01" 
            component={Onboarding01}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Onboarding02" 
            component={Onboarding02}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Onboarding03" 
            component={Onboarding03}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="MainTabs" 
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="FoodDetail" 
            component={FoodDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
