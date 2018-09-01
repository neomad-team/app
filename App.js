import React, { Component } from 'react'
import { Text, View } from 'react-native'

import HeaderApp from './components/Header/HeaderApp'
import CommunityButton from './components/Buttons/CommunityButton'
import LoginForm from './components/Login/LoginForm'
import Watch from './components/Text/Watch'

import styles from './styles/commons'

export default class App extends Component {

  constructor () {
    super()

    this.state = {
      lat: null,
      long: null,
      userLogged: false,
      communityMode: false,
      userName: null,
      userId: null
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

  login () {
    if (this.state.userLogged) {
      return <Text style={styles.welcome}>{this.state.userName}</Text>
    } else {
      return <LoginForm _getUser={this._getUser} />
    }
  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp
          userLogged={this.state.userLogged}
          userId={this.state.userId} />

        <View>{this.login()}</View>
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
