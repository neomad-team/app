import React, { PureComponent } from 'react'
import { Avatar } from 'react-native-elements'

import { style } from './AvatarAppStyle'
import { content } from '../../static/content'

export default class AvatarApp extends PureComponent {

  render () {
    return (
      <Avatar
        rounded
        containerStyle={style.container}
        source={{
          uri: `${content.url}${content.imgPath}${this.props.userId}`
        }}
      />
    )
  }
}
