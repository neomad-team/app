import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Header } from 'react-native-elements'

import AvatarApp from './AvatarApp'

import { style } from './HeaderAppStyle'

export default class HeaderApp extends Component {

  constructor () {
    super()

    this.state = {
      userId: null,
      userName: null
    }
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const userName = await AsyncStorage.getItem('userName')
    this.setState({
      userId: userId,
      userName: userName
    })
  }

  render () {
    let avatar = null
    if (this.state.userId || this.state.userName) {
      avatar = <AvatarApp
        userId={this.state.userId}
        userName={this.state.userName} />
    }

    return (
      <Header
        outerContainerStyles={style.header}
        statusBarProps={style.barStyle}
        centerComponent={style.title}
        rightComponent={avatar}
      />
    )
  }
}
