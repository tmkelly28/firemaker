import React, { Component } from 'react';
import LoginView from './Login.view';

export default class LoginLocal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      pwd: ''
    };

    this.methods = {
      handleChange: this.handleChange.bind(this),
      handleJoin: this.handleJoin.bind(this),
      handleLogOut: this.handleLogOut.bind(this)
    };
  }

  handleChange (evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    this.setState({ [field]: value });
  }

  handleJoin (evt) {
    evt.preventDefault();
    const credentials = this.state;
    this.props.logIn(credentials);
  }

  handleLogOut (evt) {
    evt.preventDefault();
    this.props.logOut();
  }

  render () {
    return <LoginView
      {...this.state}
      {...this.methods}
      {...this.props}
    />
  }
}
