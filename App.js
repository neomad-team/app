import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthScreen from './components/screens/AuthScreen'
import AppLoadingScreen from './components/screens/AppLoadingScreen'
import AppScreen from './components/screens/AppScreen'
import HeaderApp from './components/Header/HeaderApp'

import styles from './styles/commons'
import content from './static/content'

const AppStack = createStackNavigator(
  {
    AppLoading: AppLoadingScreen,
    App: AppScreen,
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

  constructor () {
    super()

    this.state = {
      lat: null,
      long: null,
      userLogged: false,
      communityMode: false,
      userName: null,
      userId: null,
      user: 'user actuel'
    }
  }

  _authorized () {
    this.setState({
      communityMode: !this.state.communityMode
    })
  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp
          userLogged={this.state.userLogged}
          userId={this.state.userId}
          userName={this.state.userName} />
        <RootStack />
      </View>
    )
  }
}
