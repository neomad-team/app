import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
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
    this._bootstrapAsync()
  }

  async _bootstrapAsync () {
    const userId = await AsyncStorage.getItem('userId')
    this.props.navigation.navigate(userId ? 'App' : 'Auth')
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
