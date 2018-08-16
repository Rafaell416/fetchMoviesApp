import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'

function CategoryListLayout ({ children, title }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={styles.background}
      >
        <Text style={styles.title}>{title}</Text>
        {children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    paddingLeft: 5
  },
  background: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: '#4c4c4c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export default CategoryListLayout
