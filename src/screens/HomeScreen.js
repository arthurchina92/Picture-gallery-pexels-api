import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../../api/pexels";

function HomeScreen(){
  const loadImages = async () => {
    const res = await getImages();
    console.log(res.data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
export { HomeScreen };
