import React, { Component } from 'react';

import NavBar from './navigation/nav-bar'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Burke M Rich Contacts Page</h1>
        <h2>Hi! How are you!</h2>
        <NavBar />
      </div>
    );
  }
}