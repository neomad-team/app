import React from 'react'

import LoginForm from '../Login/LoginForm'


export default class LoginScreen extends React.Component {
  render() {
    return (
      <LoginForm login={ this.props.login } />
    )
  }
}
