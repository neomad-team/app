import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { Button, FormValidationMessage } from 'react-native-elements'
import FormData from 'FormData'

import FieldEmail from '../fields/FieldEmail'
import FieldPassword from '../fields/FieldPassword'

import api from '../../static/api'
import { AppConsumer } from '../../static/context'
import { style } from './ScreensStyle'
import { content } from '../../static/content'

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

        <View style={style.container}>
          <Button
            icon={style.icon}
            title='Log in'
            buttonStyle={style.button}
            textStyle={style.text}
            onPress={() => this.login()}
          />
        </View>

        <View style={style.container}>
          <AppConsumer>
            { (context) => {
              return <Text>{context.userId}</Text>
            }}
          </AppConsumer>
        </View>
      </View>
    )
  }
}
