import React, { Component } from 'react'
import { View } from 'react-native'

import FieldEmail from './FieldEmail'
import FieldPassword from './FieldPassword'
import LoginButton from '../Buttons/LoginButton'

import { style } from './LoginFormStyle'

export default class LoginForm extends Component {

  constructor () {
    super()

    this.state = {
      user: null,
      email: null,
      password: null
    }

    this._postForm = this._postForm.bind(this)
  }

  _postForm () {
    this.setState({
      user: !this.state.user
    })
  }

  render () {
    return (
      <View>

        <View>
          <FieldEmail _onChangeText={(email) => this.setState({email})} />
          <FieldPassword _onChangeText={(password) => this.setState({password})} />
        </View>

        <View style={style.button}>
          <LoginButton _postForm={this._postForm} />
        </View>
      </View>
    )
  }
}
