import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = { userId: 'none' }
  }

  updateValue = (key, val) => {
    this.setState({ [key]: val })
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          userId: this.state.userId,
          updateValue: this.updateValue
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
