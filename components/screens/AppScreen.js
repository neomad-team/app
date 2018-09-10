import React from 'react'
import { Text, View } from 'react-native'

import CommunityButton from '../Buttons/CommunityButton'
import Watch from '../Text/Watch'

import styles from '../../static/styles'

export default class AppScreen extends React.Component {
  constructor () {
    super()

    this.state = {
      communityMode: false
    }
  }

  _authorized () {
    return false
  }

  render () {
    return (
      <View style={styles.body}>
        <Text>Hello user {this.props.screenProps}</Text>
        <CommunityButton
          communityMode={this.state.communityMode}
          _authorized={this._authorized} />
        <Watch />
      </View>
    )
  }
}
