import React, { Component } from 'react'
import { Header } from 'react-native-elements'

const title = {
  text: 'NEOMAD',
  style: { color: '#fff' }
}

export default class HeaderApp extends Component {
  render () {
    return (
      <Header
        centerComponent={title}
      />
    )
  }
}
