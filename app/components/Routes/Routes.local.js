import React, { Component } from 'react';
import RoutesView from './Routes.view';

export default class RoutesLocal extends Component {

  componentDidMount () {

    window.firebase.auth()
      .onAuthStateChanged(member => {
        if (member) this.props.receiveUser(member);
        else console.log('no user!');
      });
  }

  render () {
    return <RoutesView />
  }
}
