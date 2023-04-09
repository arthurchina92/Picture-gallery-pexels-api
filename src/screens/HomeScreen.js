import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getImages } from "../../api/pexels";
import { ImageList } from "../components/ImageList";
import { Input } from "@rneui/base";
import { SearchContext } from "../../App";

function HomeScreen() {
  const {openSearch, setOpenSearch} = useContext(SearchContext);
  console.log(openSearch);

  const [photos, setPhotos] = useState([]);
  
  const loadImages = async () => {
    const res = await getImages();
    console.log(res.data);
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
    {openSearch && (
      <View>
        <Input/>
        <Button title="Search"/>
      </View>
    )}
    <View style={Styles.container}>
      <Text style={Styles.totalResultText}>1000 results</Text>
      <ImageList photos={photos}/>
    </View>
    </>
    
  );
}
const Styles=StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalResultText: {
    color: '#ffff',
    width: '100%',
    textAlign:'right',
    paddingTop: 30,
    marginRight: 40
  },
})
export { HomeScreen };
