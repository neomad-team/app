import React, { Component } from 'react'
import { View } from 'react-native'

import HeaderApp from './components/Header/HeaderApp'
import GeoButton from './components/Buttons/GeoButton'
import Watch from './components/Text/Watch'

import styles from './styles/commons'

export default class App extends Component {

  constructor () {
    super()

    this.state = {
      lat: null,
      long: null,
      authorized: false
    }

    this._authorize = this._authorize.bind(this)
  }

  _authorize () {
    this.setState({
      authorized: !this.state.authorized
    })
  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp authorized={this.state.authorized} />
        <View style={styles.body}>
          <GeoButton _authorize={this._authorize} />
          <Watch />
        </View>
      </View>
    )
  }
}
