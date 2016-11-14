import React, { Component } from 'react';
import LoginView from './Login.view';

export default class LoginLocal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      pwd: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);

    this.methods = {
      handleChange: this.handleChange,
      handleJoin: this.handleJoin,
      handleLogOut: this.handleLogOut
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
