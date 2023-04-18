import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button} from "@rneui/themed";
import * as WebBrowser from 'expo-web-browser';

function ImageScreen({ route }) {
  const { image } = route.params;

console.log(image);
const handlePress = async() => {
  await WebBrowser.openBrowserAsync(image.photographer_url);
}

  return (
    <View style={Styles.container}>
        <Image style={Styles.image} source={{ uri: image.src.medium }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent:"space-between",
        }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
          <Avatar
             title={image.photographer.split(" ").map((string) => string[0]).join(" ").toUpperCase()}
             containerStyle={{ backgroundColor: "red" }}
             rounded
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={Styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button title="Download" buttonStyle={{backgroundColor: "#229783"}} />
      </View>
    </View>
      
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#0d0d0d"
  },
  image: {
    height: 400,
    width: 400,
    marginTop: 5,
  },
  textPhotographer: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 18,
    marginStart: 5,
  },
});
export { ImageScreen };
