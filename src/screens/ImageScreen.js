import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@rneui/themed";
import * as WebBrowser from "expo-web-browser";
import { ImageList } from "../components/ImageList";
import { getImages } from "../../api/pexels";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

function ImageScreen({ route }) {
  const { image } = route.params;

  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  console.log(image);
  const handlePress = async() => {
    await WebBrowser.openBrowserAsync(image.photographer_url);
  };
  const downloadFile = async() => {
    try {
      let fileUri = FileSystem.documentDirectory + image.id + ".jpeg";
      const { uri } = await FileSystem.downloadAsync(
        image.src.portrait,
        fileUri
      );
      saveFile(uri);
    } catch (error) {
      console.error('Error during download:', error);
    }
  };
  const saveFile = async (fileUri) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      console.log('Permissions status', status);
      if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        console.log('Asset created', asset);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
        console.log('Album created');
      } 
    } catch (error) {
      console.error(error);
    }
  };
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{ uri: image.src.portrait }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar
            title={image.photographer
              .split(" ")
              .map((string) => string[0])
              .join(" ")
              .toUpperCase()}
            containerStyle={{ backgroundColor: "red" }}
            rounded
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={Styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Download"
          buttonStyle={{ backgroundColor: "#229783" }}
          onPress={() => handleDownload()}
        />
      </View>
      <View>
        <ImageList photos={photos} />
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
    backgroundColor: "#0d0d0d",
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
