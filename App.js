import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './components/screens/LoginScreen'
import CommunityScreen from './components/screens/CommunityScreen'
import HeaderApp from './components/Header/HeaderApp'
import LoginForm from './components/Login/LoginForm'

import styles from './styles/commons'
import content from './static/content'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Community: CommunityScreen,
  },
  { initialRouteName: 'Login' }
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
      user: {}
    }

    this._authorized = this._authorized.bind(this)
    this._getUser = this._getUser.bind(this)
  }

  _authorized () {
    this.setState({
      communityMode: !this.state.communityMode
    })
  }

  _getUser (user) {
    console.warn(user)
    this.setState({
      userLogged: true,
      userName: user.username,
      userId: user.id
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
