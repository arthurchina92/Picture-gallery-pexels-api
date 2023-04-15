import { View, Text, StyleSheet} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getImages } from "../../api/pexels";
import { ImageList } from "../components/ImageList";
import { SearchContext } from "../../App";
import { Input, Button} from "@rneui/base";

function HomeScreen() {
  const {openSearch, setOpenSearch} = useContext(SearchContext);
  console.log(openSearch);

  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadImages = async (searchTerm) => {
    const res = await getImages(searchTerm);
    console.log(res.data);
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async () => {
    await loadImages(searchTerm)
  }

  return (
    <>
    {openSearch && (
      <View style={Styles.searchSection}>
        <Input
           leftIcon={{type: "fontisto", name:"search", color: "#ffff"}} 
           placeholder="Search a term"
           style={Styles.input}
           leftIconContainerStyle={Styles.searchLeftIcon}
           inputContainerStyle={Styles.searchInput}
           onChangeText={(value)=> setSearchTerm(value)}
        />
        <Button 
           title="Search" 
           buttonStyle={Styles.searchButton}
           onPress={()=> handleSearch()}/>
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
  searchSection: {
    backgroundColor: "#0d0d0d",
    width: "100%",
    paddingLeft: 10,
    flex: 1/5,
    flexDirection:"row",
    paddingRight: 85,
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#2c292c",
    borderBottomWidth: 0,
    paddingHorizontal:4,
    color: "#fff"
  },
  input: {
    color: "#ffff"
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#229783",
    marginBottom: 27,
  },
})
export { HomeScreen };
