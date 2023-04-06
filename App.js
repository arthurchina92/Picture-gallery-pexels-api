import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Image } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import pexelLogo from './assets/pexelsicon.png';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Image
                source={pexelLogo}
                style={{ width: 28, height: 28, marginRight: 20 }}
              />
            ),
            headerRight: () => (
              <Text style={{color:'#fff', fontSize: 20, fontWeight:'bold', marginRight:15}}
                    onPress={()=> console.log("Searching")} 
                     > Search</Text>
            ),
              title: "Pexels app",
              headerTintColor:'#fff',
              headerStyle: {
                backgroundColor: '#0d0d0d'
              }
          }}
        />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
