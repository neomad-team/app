import React, { Component } from 'react'
import { Header } from 'react-native-elements'

import { style } from './HeaderAppStyle'

export default class HeaderApp extends Component {

  render () {
    const authorized = this.props.authorized ? {icon: 'gps-not-fixed', color: '#fff'} : { icon: 'gps-fixed', color: '#fff' }

    return (
      <Header
        outerContainerStyles={style.header}
        statusBarProps={style.barStyle}
        centerComponent={style.title}
        rightComponent={authorized}
      />
    )
  }
}
