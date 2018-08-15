import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native'
import SugestionListLayout from '../components/SugestionListLayout'
import EmptyState from '../components/EmptyState'
import Separator from '../components/Separator'
import Sugestion from '../components/Sugestion'

export default class SugestionList extends Component {

  _renderEmptyState = () => <EmptyState text="No hay Elementos en la lista"/>

  _renderSeparator = () => <Separator />

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
    <SugestionListLayout title="Suggested Movies">
      <FlatList
        data={list}
        renderItem={({ item })=> <Sugestion item={item}/>}
        ListEmptyComponent={this._renderEmptyState}
        ItemSeparatorComponent={this._renderSeparator}
      />
    </SugestionListLayout>
    )
  }
}
