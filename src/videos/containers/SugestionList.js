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

  _keyExtractor = item => item.id.toString()

  render () {
    const { sugestions } = this.props
    return (
    <SugestionListLayout title="Suggested Movies">
      <FlatList
        data={sugestions}
        renderItem={({ item })=> <Sugestion {...item}/>}
        ListEmptyComponent={this._renderEmptyState}
        ItemSeparatorComponent={this._renderSeparator}
        keyExtractor={this._keyExtractor}
      />
    </SugestionListLayout>
    )
  }
}
