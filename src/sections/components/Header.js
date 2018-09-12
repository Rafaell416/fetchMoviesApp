import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native'

function Header ({children}) {
  return(
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.brand}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
          fadeDuration={0}
        />
        <Text style={styles.title}>Fetch Movies App</Text>
      </View>
      <View style={styles.iconView}>
        {children}
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  brand: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconView: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Header
