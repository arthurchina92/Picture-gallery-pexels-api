import { View,Text,Image,StyleSheet} from 'react-native'
import React from 'react'

function ImageScreen({route}) {
  const{image} = route.params;
  
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri:image.src.medium}}/>
    </View>
  )
}
const Styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems:'center', 
    backgroundColor:'#0d0d0d',
  },
  image: {
    height:350,
    width:350,
    marginTop:50,
  },
})
export {ImageScreen};
