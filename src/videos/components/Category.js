import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

function Category ({ genres, background_image }) {
  if (!genres) {
    return null
  }
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{uri: background_image}}
        style={styles.background}
      >
        <View style={styles.categoryView}>
          <Text style={styles.title}>{genres[0]}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 250,
    marginRight: 8,
    borderRadius: 8,
    overflow: 'hidden'
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  categoryView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Category
