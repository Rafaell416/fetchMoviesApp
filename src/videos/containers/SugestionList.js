import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native'

export default class SugestionList extends Component {
  render () {
    const list = [
      {
        key: '1',
        title: 'Avengers'
      },
      {
        key: '2',
        title: 'Spiderman'
      }
    ]
    return (
      <FlatList 
        data={list}
        renderItem={({ item })=> <Text>{item.title}</Text>}
      />
    )
  }
}