import React, { Component } from 'react'
import { Avatar } from 'react-native-elements'

import { style } from './AvatarAppStyle'
import { content } from '../../static/content'

export default class AvatarApp extends Component {

  render () {
    const simulateName = 'john doe'
    const initials = simulateName
      .split(' ')
      .map(string => string[0])
      .join('')

    const src = {
      uri: `${content.url}${content.imgPath}${this.props.userId}`
    }

    return (
      <Avatar
        rounded
        containerStyle={style.container}
        source={src}
        title={initials}
        titleStyle={style.title}
      />
    )
  }
}
