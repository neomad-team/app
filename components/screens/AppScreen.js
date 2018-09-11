import React from 'react'
import { Text, View } from 'react-native'
import { AppConsumer } from '../../context'

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
        <AppConsumer>
          { (context) => {
            return <Text>the context userId is: {context.userId}</Text>
          }}
        </AppConsumer>

        <CommunityButton
          communityMode={this.state.communityMode}
          _authorized={this._authorized} />
        <Watch />
      </View>
    )
  }
}
