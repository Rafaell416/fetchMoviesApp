import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function SugestionListLayout ({ children, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5
  }
})

export default SugestionListLayout
