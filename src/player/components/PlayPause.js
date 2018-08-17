import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

function PlayPause ({ onPress, paused }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      {
        paused ? <Text style={styles.button}>PLAY</Text> : <Text style={styles.button}>PAUSE</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default PlayPause
