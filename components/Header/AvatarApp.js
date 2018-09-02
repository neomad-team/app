import React, { Component } from 'react'
import { Avatar } from 'react-native-elements'

import { style } from './AvatarAppStyle'
import { content } from '../../static/content'

export default class AvatarApp extends Component {

  render () {
    const initial = this.props.userName
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
        title={initial}
        titleStyle={style.title}
      />
    )
  }
}
