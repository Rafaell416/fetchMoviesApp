import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render () {
		const { children } = this.props
    return (
			<View style={styles.container}>
				{children}
			</View>
		)
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
