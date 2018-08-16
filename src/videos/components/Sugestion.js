import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

function Sugestion ({title, year, rating, medium_cover_image, genres}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.videoColumn}>
        <Image
          source={{uri: medium_cover_image}}
          style={styles.mini}
          fadeDuration={0}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genres[0]}</Text>
        </View>
      </View>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  videoColumn: {
    backgroundColor: 'white',
    padding: 5
  },
  textColumn: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  mini: {
    height: 150,
    width: 100,
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
