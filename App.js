import React, { Component } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './components/screens/LoginScreen'
import HeaderApp from './components/Header/HeaderApp'
import CommunityButton from './components/Buttons/CommunityButton'
import LoginForm from './components/Login/LoginForm'
import LoginButton from './components/Buttons/LoginButton'
import Watch from './components/Text/Watch'

import styles from './styles/commons'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  { initialRouteName: 'Login' }
)

class User {
  constructor (data) {
    this.data = data
  }
}

export default class App extends Component {

  constructor () {
    super()

    this.state = {
      lat: null,
      long: null,
      communityMode: false,
      user: null,
      userLogged: this.user === null,
    }

    this._userLogged = this._userLogged.bind(this)
    this._authorized = this._authorized.bind(this)
  }

  _userLogged () {
    this.setState({
      userLogged: !this.state.userLogged
    })
  }

  _authorized () {
    this.setState({
      communityMode: !this.state.communityMode
    })
  }

  login (userData) {

  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp userLogged={this.state.userLogged} />
        <LoginScreen actions={ this.actions } />

        <View style={styles.body}>
          <CommunityButton
            communityMode={this.state.communityMode}
            _authorized={this._authorized} />
          <Watch />
        </View>
      </View>
    )
  }
}
