import React, { Component } from 'react'
import { Header } from 'react-native-elements'

import { style } from './HeaderAppStyle'

export default class HeaderApp extends Component {
  render () {
    return (
      <Header
        outerContainerStyles={style.header}
        statusBarProps={style.barStyle}
        centerComponent={style.title}
      />
    )
  }
}
