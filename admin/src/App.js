import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import AdminLogin from './component/AdminLogin';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={AdminLogin}/>

      </div>
    );
  }
}

export default App;
