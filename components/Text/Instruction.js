import React, { Component } from 'react'
import { Platform, Text } from 'react-native'

import styles from '../../styles/commons'

const instruction = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class Instruction extends Component {

  render () {
    return (
      <Text style={styles.instructions}>{instruction}</Text>
    )
  }
}
