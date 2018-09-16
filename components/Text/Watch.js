import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FormData from 'FormData'

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
        this.setPosition(position.coords.latitude, position.coords.longitude)
      },
      error => this.setState({ error: error.message }),
      options
    )
  }

  componentWillUnmount () {
    navigator.geolocation.stopObserving()
  }

  async setPosition (latitude, longitude) {
    const url = `${content.url}${content.positionPath}${this.props.userId}`
    const formData = new FormData()
    formData.append('position', [latitude, longitude])
    const data = {
      body: formData
    }
    try {
      const response = await api(url, data)
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
