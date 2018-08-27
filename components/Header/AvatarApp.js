import React, { Component } from 'react'
import { Avatar } from 'react-native-elements'

import { style } from './AvatarAppStyle'

export default class AvatarApp extends Component {

  render () {
    const src = {
      uri: 'https://neomad.org/static/uploads/avatars/5914dbdca193770016e289a7'
    }

    return (
      <Avatar
        rounded
        containerStyle={style}
        source={src}
      />
    )
  }
}
