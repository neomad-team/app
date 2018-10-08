import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'

export default class AppLoadingScreen extends Component {
  constructor () {
    super()

    this._bootstrapAsync()
  }

  async _bootstrapAsync () {
    const userId = await AsyncStorage.getItem('userId')
    this.props.navigation.navigate(userId ? 'App' : 'Auth')
  }

  render () {
    return (
      <View>
        <StatusBar barStyle='default' />
        <ActivityIndicator />
      </View>
    )
  }
}
