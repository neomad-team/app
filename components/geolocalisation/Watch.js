import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { content } from '../../static/content'
import api from '../../static/api'

const options = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
  distanceFilter: 10
}

export default class Geolocation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: null
    }
  }

  componentDidMount () {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setPosition(position.coords.latitude, position.coords.longitude, this.props.userId)
      },
      error => this.setState({ status: error.message }),
      options
    )
  }

  componentWillUnmount () {
    navigator.geolocation.stopObserving()
  }

  async setPosition (latitude, longitude, auth) {
    const body = {
      body: JSON.stringify([latitude, longitude])
    }
    const url = `${content.url}${content.positionPath}`

    const response = await api(url, body, auth)
    if (response) {
      this.coordinatesToAddress(latitude, longitude)
    } else {
      this.setState({ status: 'error on api response' })
    }
  }

  coordinatesToAddress (lat, lng) {
    const url = `${content.osmUrl}reverse?format=json&lat=${lat}&lon=${lng}`
    fetch(url, { mode: 'cors' })
      .then(async(response) => response.json())
      .then(data => {
        this.setState({ status: `Close to ${data.address.city}` })
      })
      .catch(error => {
        this.setState({ status: 'error on OSM response' })
        console.error(error)
      })
  }

  render () {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.status && <Text>Status: {this.state.status}</Text>}
      </View>
    )
  }
}
