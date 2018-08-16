import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native'
import CategoryListLayout from '../components/CategoryListLayout'
import EmptyState from '../components/EmptyState'
import Category from '../components/Category'

export default class CategoryList extends Component {

  _renderEmptyState = () => <EmptyState text="No hay Elementos en la lista"/>

  _keyExtractor = item => item.id.toString()

  render () {
    const { categories } = this.props
    return (
    <CategoryListLayout title="Categories">
      <FlatList
        data={categories}
        renderItem={({ item })=> <Category {...item}/>}
        ListEmptyComponent={this._renderEmptyState}
        keyExtractor={this._keyExtractor}
        horizontal
      />
    </CategoryListLayout>
    )
  }
}
