import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button, FormValidationMessage } from 'react-native-elements'
import FormData from 'FormData'

import api from '../../api'
import FieldEmail from '../fields/FieldEmail'
import FieldPassword from '../fields/FieldPassword'

import { content } from '../../static/content'
import { color } from '../../static/color'

const buttonStyle = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: color.main,
    margin: 20,
    padding: 10,
    borderRadius: 100,
    width: 210
  },
  icon: {
    color: color.white,
    name: 'person',
    size: 30
  },
  text: {
    color: color.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default class AuthScreen extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  async login () {
    const url = `${content.url}${content.loginPath}`

    const formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)

    const postData = {
      body: formData
    }

    try {
      const response = await api(url, postData)
      if (!response.ok) {
        this.setState({ error: 'Please check your email and password' })
        return
      }
      AsyncStorage.setItem('userId', response.data.id)
      this.props.navigation.navigate('App')
    }
    catch (e) {
      console.error(e)
    }
  }

  render () {
    const errorText = <FormValidationMessage>{this.state.error}</FormValidationMessage>
    return (
      <View>
        <View>
          {this.state.error ? errorText : null}
          <FieldEmail
            _onChangeText={(email) => this.setState({email: email})}
            value={this.state.email} />
          <FieldPassword
            _onChangeText={(password) => this.setState({password: password})}
            value={this.state.password} />
        </View>

        <View style={buttonStyle.container}>
          <Button
            icon={buttonStyle.icon}
            title='Log in'
            buttonStyle={buttonStyle.button}
            textStyle={buttonStyle.text}
            onPress={() => this.login()}
          />
        </View>
      </View>
    )
  }
}
