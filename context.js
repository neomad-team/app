import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {
  constructor () {
    super()

    this.state = {
      userId: null,
      communityMode: false
    }
    this._bootstrapAsync()
  }

  setGlobalState = (key, val) => {
    this.setState({ [key]: val })
  }

  async _bootstrapAsync () {
    this.setState({
      userId: await AsyncStorage.getItem('userId')
    })
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          userId: this.state.userId,
          communityMode: this.state.communityMode,
          setGlobalState: this.setGlobalState
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
