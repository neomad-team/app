import React, { Component } from 'react'
import { View } from 'react-native'
import FormData from 'FormData'

import FieldEmail from './FieldEmail'
import FieldPassword from './FieldPassword'
import LoginButton from '../Buttons/LoginButton'

import { style } from './LoginFormStyle'
import { content } from '../../static/content'

export default class LoginForm extends Component {

  constructor () {
    super()

    this.state = {
      email: 'john@doe.com',
      password: 'johndoe',
      user: null
    }

    this._postForm = this._postForm.bind(this)
    this.login = this.login.bind(this)
  }

  _postForm () {
    const url = `${content.url}${content.loginPath}`

    const formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)

    const postData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }

    fetch(url, postData)
      .then(response => response.json())
      .then(responseJson => this.props._getUser(responseJson))
      .catch(error => { console.error(error) })
  }

  login () {
    this.props.navigation.navigate('Community')
  }

  render () {
    return (
      <View>
        <View>
          <FieldEmail
            _onChangeText={(email) => this.setState({email: email})}
            value={this.state.email} />
          <FieldPassword
            _onChangeText={(password) => this.setState({password: password})}
            value={this.state.password} />
        </View>

        <View style={style.button}>
          <LoginButton login={ this.login } />
        </View>
      </View>
    )
  }
}
