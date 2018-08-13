import React, {Component} from 'react'
import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header'
import {
  Text
} from 'react-native'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>🔥</Text>
        </Header>
      </Home>
    )
  }
}

