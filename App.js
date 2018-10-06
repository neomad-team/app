import React, { Component } from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { AppProvider, AppConsumer } from './context'

import AuthScreen from './components/screens/AuthScreen'
import AppLoadingScreen from './components/screens/AppLoadingScreen'
import AppScreen from './components/screens/AppScreen'
import HeaderApp from './components/header/HeaderApp'

import styles from './static/styles'

const AppStack = createStackNavigator(
  { AppLoading: AppLoadingScreen, App: AppScreen },
  { initialRouteName: 'AppLoading' }
)

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
      <AppProvider>
        <View style={styles.app} >
          <AppConsumer>
            { context => {
              return <HeaderApp userId={context.userId} />
            }}
          </AppConsumer>

          <RootStack />
        </View>
      </AppProvider>
    )
  }
}
