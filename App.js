import React, { Component } from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthScreen from './components/screens/AuthScreen'
import AppLoadingScreen from './components/screens/AppLoadingScreen'
import AppScreen from './components/screens/AppScreen'
import HeaderApp from './components/Header/HeaderApp'

import styles from './styles/commons'

const AppStack = createStackNavigator(
  {
    AppLoading: AppLoadingScreen,
    App: AppScreen
  },
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
  render () {
    return (
      <View style={styles.app}>
        <HeaderApp />
        <RootStack />
      </View>
    )
  }
}
