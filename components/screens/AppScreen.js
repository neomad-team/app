import React from 'react'
import { AsyncStorage, View } from 'react-native'
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

  _authorized (setGlobalState, communityMode) {
    setGlobalState({communityMode: !communityMode})
  }

  watch (context) {
    if (context.communityMode) {
      return <Watch />
    }
  }

  render () {
    return (
      <AppConsumer>
        { (context) => {
          return (
            <View style={styles.body}>
              <CommunityButton
                communityMode={context.communityMode}
                _authorized={() => {
                  this._authorized(context.setGlobalState, context.communityMode)
                }} />

              {this.watch(context)}
            </View>
          )
        }}
      </AppConsumer>
    )
  }
}
