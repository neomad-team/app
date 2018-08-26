import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Button } from 'react-native-elements'

import { style } from './GeoButtonStyle'

const options = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

export default class GeoButton extends Component {

  _geolocalise () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        Alert.alert(
          'your are currently:',
          `lat: ${position.coords.latitude.toString()} / long: ${position.coords.longitude.toString()}`
        )
      },
      (error) => Alert.alert(error),
      options
    )
  }

  render () {
    return (
      <Button
        icon={style.icon}
        title='Geolocalise me'
        buttonStyle={style.button}
        textStyle={style.text}
        onPress={this._geolocalise}
      />
    )
  }
}
