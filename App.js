import React, {Component} from 'react'
import {
  Text
} from 'react-native'

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header'
import SugestionList from './src/videos/containers/SugestionList'


type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>🔥</Text>
        </Header>
        <SugestionList />
      </Home>
    )
  }
}

