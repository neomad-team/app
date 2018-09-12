import React, { Component } from 'react'
import { CheckBox } from 'react-native-elements'

import { style } from './CommunityButtonStyle'

export default class CommunityButton extends Component {

  communityFeedback (communityMode) {
    return communityMode
    ? 'Sharing location with community'
    : 'Stealth mode – not socializing'
  }

  render () {
    return (
      <CheckBox
        center
        title={this.communityFeedback(this.props.communityMode)}
        iconType='material'
        checkedIcon='location-searching'
        uncheckedIcon='location-disabled'
        containerStyle={style.container}
        checked={this.props.communityMode}
        onPress={this.props._authorized}
      />
    )
  }
}
