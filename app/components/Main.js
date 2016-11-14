import React, { Component } from 'react';
import Login from './Login';

export default class Main extends Component {

  render () {
    return (
      <div className="container">
        <h1>Hello React/Firebase</h1>
        <Login />
      </div>
    );
  }
}
