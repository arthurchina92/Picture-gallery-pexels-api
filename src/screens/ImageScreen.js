import { View, Text, Image } from 'react-native'
import React from 'react'

function ImageScreen({route}) {
  const{image} = route.params;
  return (
    <View style={{alignItems:'center', marginTop:20}}>
      <Image source={{uri:image.src.medium , height:'80%', width: '80%', marginTop:5}}/>
    </View>
  )
}
export {ImageScreen};
