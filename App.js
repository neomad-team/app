import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './static/style'
import instruction from './static/instruction'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Button
          title='Hello World!'
          onPress={() => {
            Alert.alert('You tapped the button!')
          }}
        />
        <Text style={styles.welcome}>Welcome there!</Text>
        <Text style={styles.instructions}>To get started edit App.js</Text>
        <Text style={styles.instructions}>{instruction}</Text>
      </View>
    )
  }
}
