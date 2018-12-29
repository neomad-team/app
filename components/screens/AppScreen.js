import React from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button } from 'react-native-elements'
import { AppConsumer } from '../../context'

import CommunityButton from '../buttons/CommunityButton'
import Watch from '../geolocalisation/Watch'

import styles from '../../static/styles'
import { style } from './style'

const inline = {
  logout: {
    width: '100%',
    borderRadius: 0,
    margin: 0,
    marginTop: 10
  }
}

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
      return <Watch userId={context.userId} />
    }
  }

  logout (setGlobalState) {
    AsyncStorage.removeItem('userId')
    setGlobalState({userId: null})
    this.props.navigation.navigate('Auth')
  }

  render () {
    return (
      <AppConsumer>
        {context => {
          return (
            <View style={styles.body}>
              <CommunityButton
                communityMode={context.communityMode}
                _authorized={() => {
                  this._authorized(context.setGlobalState, context.communityMode)
                }} />
              {this.watch(context)}
              <Button
                title='Log out'
                buttonStyle={Object.assign({}, style.button, inline.logout)}
                textStyle={style.text}
                onPress={() => this.logout(context.setGlobalState)}
                />
            </View>
          )
        }}
      </AppConsumer>
    )
  }
}
