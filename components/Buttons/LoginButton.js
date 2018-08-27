import React, { Component } from 'react'
import { Button } from 'react-native-elements'

import { style } from './LoginButtonStyle'

export default class LoginButton extends Component {

  render () {
    return (
      <Button
        icon={style.icon}
        title='User sign in'
        buttonStyle={style.button}
        textStyle={style.text}
        onPress={this.props._authorize}
      />
    )
  }
}
