import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Image } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import pexelLogo from "./assets/pexelsLogo.png"
import { SearchContext } from "./src/contexts/SearchContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  

  return (
    <SearchContext.Provider value={{openSearch, setOpenSearch}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Image
                source={pexelLogo}
                style={{ width: 28, height: 28, marginRight: 20 }}
              />
            ),
            headerRight: () => (
            <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 15,
                }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Pexels app",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0d0d0d",
            },
          }}
          /> 
        <Stack.Screen 
           name="ImageScreen" 
           component={ImageScreen}
           options={{
            title: "Pexels app",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0d0d0d",
            },
           }}
           />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
    </SearchContext.Provider>
  );
}
