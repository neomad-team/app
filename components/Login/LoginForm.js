import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import LoginButton from '../Buttons/LoginButton'


export default class LoginForm extends Component {
  submit () {
    const url = 'http://localhost:5000/api/login/'

    const formData = new FormData()
    formData.append('email', this.email)
    formData.append('password', this.password)

    const postData = {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
    }
    fetch(url, postData)
      .then(response => response.json())
      .then(userData => this.props.login(userData))
      .catch(error => { console.error(error) })
  }

  render () {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormValidationMessage>It seems your email or Password not working</FormValidationMessage>
        <LoginButton submit={ this.submit } />
      </View>
    )
  }
}
