import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FormData from 'FormData'

import FieldEmail from './FieldEmail'
import FieldPassword from './FieldPassword'
import LoginButton from '../Buttons/LoginButton'

import { style } from './LoginFormStyle'

export default class LoginForm extends Component {

  constructor () {
    super()

    this.state = {
      user: null,
      email: 'john@doe.com',
      password: 'johndoe',
      error: null,
      response: null
    }

    this._postForm = this._postForm.bind(this)
  }

  _postForm () {
    const url = 'http://localhost:5000/api/login/'

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
      .then(responseJson => this.setState({user: responseJson}))
      .catch(error => { console.error(error) })
  }

  render () {
    let username = ''
    if (this.state.user) {
      username = this.state.user.username
    }

    return (

      <View>
        <Text>{username}</Text>
        <View>
          <FieldEmail
            _onChangeText={(email) => this.setState({email: email})}
            value={this.state.email} />
          <FieldPassword
            _onChangeText={(password) => this.setState({password: password})}
            value={this.state.password} />
        </View>

        <View style={style.button}>
          <LoginButton _postForm={this._postForm} />
        </View>
      </View>
    )
  }
}
