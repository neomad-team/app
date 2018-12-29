import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button, FormValidationMessage } from 'react-native-elements'
import { AppConsumer } from '../../context'
import FormData from 'FormData'

import Field from '../form/Field'

import api from '../../static/api'
import { content } from '../../static/content'
import { style } from './Style'

export default class AuthScreen extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  async login (setGlobalState) {
    const url = `${content.url}${content.loginPath}`
    const formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    const body = {
      body: formData
    }
    try {
      const response = await api(url, body)
      if (!response) {
        this.setState({ error: content.error })
        return
      }
      const userData = await response.json()
      AsyncStorage.setItem('userId', userData.id)
      setGlobalState({userId: userData.id})
      this.props.navigation.navigate('App')
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <View>
        <View>
          <Field
            label='Email'
            secureTextEntry={false}
            _onChangeText={email => this.setState({email})}
            value={this.state.email} />
          <Field
            label='Password'
            secureTextEntry={true}
            _onChangeText={password => this.setState({password})}
            value={this.state.password} />

            {this.state.error
              ? <FormValidationMessage>{this.state.error}</FormValidationMessage>
              : null}
        </View>

        <View style={style.container}>
          <AppConsumer>
            {context => {
              return <Button
                icon={style.icon}
                title='Log in'
                buttonStyle={style.button}
                textStyle={style.text}
                onPress={() => this.login(context.setGlobalState)}
              />
            }}
          </AppConsumer>
        </View>
      </View>
    )
  }
}
