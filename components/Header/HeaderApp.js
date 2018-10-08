import React, { PureComponent } from 'react'
import { Header } from 'react-native-elements'

import AvatarApp from './AvatarApp'

import { style } from './HeaderAppStyle'

export default class HeaderApp extends PureComponent {

  _createAvatar (id) {
    return id !== null ? <AvatarApp userId={id} /> : null
  }

  render () {
    return (
      <Header
        outerContainerStyles={style.header}
        statusBarProps={style.barStyle}
        centerComponent={style.title}
        rightComponent={this._createAvatar(this.props.userId)}
      />
    )
  }
}
