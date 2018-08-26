import React, { Component } from 'react'
import { View } from 'react-native'

import HeaderApp from './components/Header/HeaderApp'
import Instruction from './components/Text/Instruction'

import styles from './static/commons'

export default class App extends Component {
  render () {
    return (
      <View style={styles.app}>
        <HeaderApp />
        <View style={styles.body}>
          <Instruction />
        </View>
      </View>
    )
  }
}
