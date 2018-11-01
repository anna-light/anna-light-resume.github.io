import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import BLU from './pages/BLU'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/blue" component={BLU} />
        </>
      </Router>
    );
  }
}

export default App
