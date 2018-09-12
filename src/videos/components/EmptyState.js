import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

function EmptyState ({ text, imageUrl }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    //backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#4c4c4c',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default EmptyState
