import React, {Component} from 'react'
import {
  Text,
  View
} from 'react-native'

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header'
import SugestionList from './src/videos/containers/SugestionList'
import CategoryList from './src/videos/containers/CategoryList'
import Player from './src/player/containers/Player'

import config from './src/config'
import createClient from './src/client'
const client = createClient(config)

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sugestions: [],
      categories: []
    }
  }

  componentWillMount () {
    this._getData()
  }

  _getData = async () => {
    const [ sugestions, categories ] = await Promise.all([
      client.getSugestions(),
      client.getMovies()
    ])
    this.setState({ sugestions, categories })
  }

  render() {
    const { sugestions, categories } = this.state
    return (
      <Home>
        <Header>
          <Text>🔥</Text>
        </Header>
          <Player style={{flex: 1}}/>
        <CategoryList categories={categories}/>
        <SugestionList sugestions={sugestions}/>
      </Home>
    )
  }
}
