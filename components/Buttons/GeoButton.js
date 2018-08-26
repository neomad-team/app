import React, { Component } from 'react'
import { Button } from 'react-native-elements'

import { style } from './GeoButtonStyle'

export default class GeoButton extends Component {

  constructor (props) {
    super(props)
}

  render () {
    return (
      <Button
        icon={style.icon}
        title='Authorize geolocalisation'
        buttonStyle={style.button}
        textStyle={style.text}
        onPress={this.props._authorize}
      />
    )
  }
}
