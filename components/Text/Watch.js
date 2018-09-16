import React, { Component } from 'react'
import { View, Text } from 'react-native'

import api from '../../static/api'
import { content } from '../../static/content'

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
      error: null
    }
  }

  componentDidMount () {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setPosition(position.coords.latitude, position.coords.longitude, this.props.userId)
      },
      error => this.setState({ error: error.message }),
      options
    )
  }

  componentWillUnmount () {
    navigator.geolocation.stopObserving()
  }

  async setPosition (latitude, longitude, userId) {
    const url = `${content.url}${content.positionPath}`
    const data = {
      body: JSON.stringify([latitude, longitude])
    }
    try {
      const response = await api(url, data, userId)
      if (!response.ok) {
        this.setState({ error: 'Error on response' })
        return
      }
    } catch (error) {
      this.setState({ error: error })
    }
  }

  render () {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.error && <Text>Error: {this.state.error}</Text>}
      </View>
    )
  }
}
