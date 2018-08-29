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
      password: null,
      error: null,
      response: null
    }

    this._postForm = this._postForm.bind(this)
  }

  _postForm () {
    const url = 'https://neomad.org/api/login/'
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => console.warn(response))
    .catch(error => {
      console.error('error', error)
    })
  }

  render () {
    return (
      <View>

        <View>
          <FieldEmail
            _onChangeText={(email) => this.setState({email})}
            value={this.state.email} />
          <FieldPassword
            _onChangeText={(password) => this.setState({password})}
            value={this.state.password} />
        </View>

        <View style={style.button}>
          <LoginButton _postForm={this._postForm} />
        </View>
      </View>
    )
  }
}
