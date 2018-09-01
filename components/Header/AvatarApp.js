import React, { Component } from 'react'
import { Avatar } from 'react-native-elements'

import { style } from './AvatarAppStyle'
import { content } from '../../static/content'

export default class AvatarApp extends Component {

  render () {
    const src = {
      uri: `${content.url}${content.imgPath}${this.props.userId}`
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
