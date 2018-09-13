import React, { Component } from 'react'
import { Header } from 'react-native-elements'

import AvatarApp from './AvatarApp'

import { style } from './HeaderAppStyle'

export default class HeaderApp extends Component {

  render () {
    const avatar = this.props.userId !== null
      ? <AvatarApp userId={this.props.userId} />
      : null

    return (
      <Header
        outerContainerStyles={style.header}
        statusBarProps={style.barStyle}
        centerComponent={style.title}
        rightComponent={avatar}
      />
    )
  }
}
