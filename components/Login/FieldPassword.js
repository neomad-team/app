import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { content } from '../../static/content'

export default class FieldPassword extends Component {

  render () {
    return (
      <View>
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry={true}
          onChangeText={this.props._onChangeText} />
        <FormValidationMessage>{content.error.password}</FormValidationMessage>
      </View>
    )
  }
}
