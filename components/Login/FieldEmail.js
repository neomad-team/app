import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { content } from '../../static/content'

export default class FieldEmail extends Component {

  render () {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.props._onChangeText} />
        <FormValidationMessage>{content.error.email}</FormValidationMessage>
      </View>
    )
  }
}
