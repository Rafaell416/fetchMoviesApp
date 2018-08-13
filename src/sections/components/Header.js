import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native'

function Header () {
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        <Text style={styles.title}>Fetch Movies App</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 5
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default Header