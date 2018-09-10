import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthScreen from './components/screens/AuthScreen'
import AppLoadingScreen from './components/screens/AppLoadingScreen'
import AppScreen from './components/screens/AppScreen'
import HeaderApp from './components/Header/HeaderApp'

import styles from './static/styles'
import { AppProvider } from './static/context'

const AppStack = createStackNavigator(
  { AppLoading: AppLoadingScreen, App: AppScreen },
  { initialRouteName: 'AppLoading' }
)

// See https://reactnavigation.org/docs/en/auth-flow.html#implement-our-authentication-loading-screen
const AuthStack = createStackNavigator(
  { Auth: AuthScreen }
)

const RootStack = createSwitchNavigator(
  { AuthStack, AppStack },
  { initialRouteName: 'AppStack' }
)

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      userId: ''
    }

    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    this.setState({
      userId: await AsyncStorage.getItem('userId')
    })
  }

  render () {
    return (
      <AppProvider>
        <View style={styles.app} >
          <HeaderApp userId={this.state.userId} />
          <RootStack screenProps={this.state.userId} />
        </View>
      </AppProvider>
    )
  }
}
