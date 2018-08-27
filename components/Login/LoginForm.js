import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class LoginForm extends Component {

  render () {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormValidationMessage>It seems your email or Password not working</FormValidationMessage>
      </View>
    )
  }
}
