import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class AppLoadingScreen extends Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem('userId')
    this.props.navigation.navigate(userId ? 'App' : 'Auth')
  }

  logout () {
    AsyncStorage.removeItem('userId')
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button
          title='Log out'
          onPress={() => this.logout()}
        />
      </View>
    )
  }
}
