import React, { Component } from 'react'

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = { userId: 'none' }
  }

  render () {
    return (
      <AppContext.Provider
        value={{ userId: this.state.userId }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
