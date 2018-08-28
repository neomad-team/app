import React, { Component } from 'react'
import { View } from 'react-native'

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
      communityMode: false
    }

    this._authorized = this._authorized.bind(this)
  }

  _authorized () {
    this.setState({
      communityMode: !this.state.communityMode
    })
  }

  render () {
    return (
      <View style={styles.app}>
        <HeaderApp userLogged={this.state.userLogged} />
        <View>
          <LoginForm />
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
