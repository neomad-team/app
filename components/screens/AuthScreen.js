import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, FormValidationMessage } from 'react-native-elements'

import FieldEmail from '../fields/FieldEmail'
import FieldPassword from '../fields/FieldPassword'

import { AppConsumer } from '../../static/context'
import { style } from './ScreensStyle'

export default class AuthScreen extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      error: ''
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
          <AppConsumer>
            { (context) => {
              return <View>
                <Button
                  icon={style.icon}
                  title='Log in'
                  buttonStyle={style.button}
                  textStyle={style.text}
                  onPress={() => context.login(
                    this.state.email,
                    this.state.password
                  )}
                />
                <Text>{context.userId}</Text>
              </View>
            }}
          </AppConsumer>
        </View>
      </View>
    )
  }
}
