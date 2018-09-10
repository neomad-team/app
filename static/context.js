import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import FormData from 'FormData'

import api from './api'
import { content } from './content'

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: ''
    }
  }

  async login (email, password) {
    const url = `${content.url}${content.loginPath}`

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const postData = {
      body: formData
    }

    try {
      const response = await api(url, postData).bind(this)
      if (!response.ok) {
        this.setState({ error: 'Please check your email and password' })
        return
      }
      this.setState({ userId: response.data.id })
    } catch (error) { console.error(error) }
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          userId: this.state.userId,
          login: this.login
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
