import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function VideoLayout ({style, video, loader, loading}) {
  return (
    <View style={style}>
      {video}
      <View style={styles.overlay}>
        { loading && loader }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default VideoLayout
