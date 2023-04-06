import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function CardImage({image}) {
const navigation = useNavigation();

  return (
    <TouchableOpacity 
       style={Styles.cardImage}
       onPress={() => navigation.navigate("ImageScreen", {image})}
    >
      <Image
        source={{
            uri: image.src.medium
            ? image.src.medium
            : 'https://us.123rf.com/450wm/ariesticon/ariesticon2006/ariesticon200600178/149137927-icono-de-imagen-aislado-sobre-fondo-blanco-icono-de-vector-de-imagen-vector-de-icono-de-galer%C3%ADa-de.jpg?ver=6',
        }}
        style={{height: 180, width: '100%'}}
        />
    </TouchableOpacity>
  )
};

const Styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '49.50%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: "#2c292c",
        borderWidth: 0,
        borderRadius: 5,
    }
})
export {CardImage};