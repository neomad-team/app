import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'
import { Button } from 'react-native-elements'
import { AppConsumer } from '../../context'

import { style } from './ScreensStyle'

export default class AppLoadingScreen extends Component {
  constructor () {
    super()

    this._bootstrapAsync()
  }

  async _bootstrapAsync () {
    const userId = await AsyncStorage.getItem('userId')
    this.props.navigation.navigate(userId ? 'App' : 'Auth')
  }

  logout (updateValue) {
    AsyncStorage.removeItem('userId')
    updateValue('userId', null)
    this.props.navigation.navigate('Auth')
  }

  render () {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
        <AppConsumer>
          { (context) => {
            return <Button
              title='Log out'
              buttonStyle={style.button}
              textStyle={style.text}
              onPress={() => this.logout(context.updateValue)}
            />
          }}
        </AppConsumer>
      </View>
    )
  }
}
