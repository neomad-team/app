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
      user: null
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
    this.setState({
      username: user.username
    })
  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp userLogged={this.state.userLogged} />
        <Text>{this.state.username}</Text>
        <View>
          <LoginForm _getUser={this._getUser} />
        </View>
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
