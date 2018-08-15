import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

function Sugestion (props) {
  return (
    <View style={styles.container}>
      <View style={styles.videoColumn}>
        <Image
          source={require('../../../assets/mini.png')}
          style={styles.mini}
          fadeDuration={0}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Acción</Text>
        </View>
      </View>
      <View style={styles.textColumn}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.year}>2018</Text>
        <Text style={styles.rating}>5 estrellas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: 'row',
  },
  videoColumn: {
    backgroundColor: 'white',
    flex: 1,
    padding: 5
  },
  textColumn: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  mini: {
    height: 100,
    width: 180,
    resizeMode: 'contain',
    // shadowOffset:{  width: 7,  height: 7,  },
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
  },
  titleView: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
   position: 'absolute',
   left: 0,
   top: 0,
   backgroundColor: 'black',
   paddingVertical: 5,
   paddingHorizontal: 7,
   marginLeft: 8,
   marginTop: 5
 },
 genreText: {
   color: 'white',
   fontSize: 11,
 }
})

export default Sugestion
