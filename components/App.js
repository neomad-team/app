import React, { Component } from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { AppProvider, AppConsumer } from '../static/context'

import AuthScreen from './screens/AuthScreen'
import AppLoadingScreen from './screens/AppLoadingScreen'
import AppScreen from './screens/AppScreen'
import HeaderApp from './header/HeaderApp'

import styles from '../static/styles'

const AppStack = createStackNavigator(
  { AppLoading: AppLoadingScreen, App: AppScreen },
  { initialRouteName: 'AppLoading', headerMode: 'none' }
)

const AuthStack = createStackNavigator(
  { Auth: AuthScreen },
  { headerMode: 'none' }
)

const RootStack = createSwitchNavigator(
  { AuthStack, AppStack },
  { initialRouteName: 'AppStack', headerMode: 'none' }
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
