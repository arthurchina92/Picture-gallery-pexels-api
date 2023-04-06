import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { ImageScreen } from './src/screens/ImageScreen';
import pexelsIcon from './assets/pexelsIcon'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Homescreen' 
             component={HomeScreen}
             options={{
              headerLeft: ()=><Image source={{}} />,
              title: "Pexels app",
             }}/>
        <Stack.Screen name='ImageScreen' component={ImageScreen}/>
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

