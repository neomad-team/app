import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export default class FieldEmail extends Component {

  render () {
    return (
      <View>
        <FormLabel>{this.props.label}</FormLabel>
        <FormInput
          onChangeText={this.props._onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize='none' />
      </View>
    )
  }
}
