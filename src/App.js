/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    const obj = {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'api.producthunt.com',
        'Access-Control-Allow-Origin': '*'
      },
    }
    fetch('https://fantasy.premierleague.com/a/team/308784/event/4', obj)  
    .then(function(res) {
      return res.json();
    })
    .then(function(resJson) {
      console.log(resJson);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
