import React, { Component } from 'react'
import { View, Text } from 'react-native'

const options = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
  distanceFilter: 10
}

export default class GeolocationExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      error: null
    }
  }

  componentDidMount () {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      (error) => this.setState({ error: error.message }),
      options
    )
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error && <Text>Error: {this.state.error}</Text>}
      </View>
    )
  }
}
