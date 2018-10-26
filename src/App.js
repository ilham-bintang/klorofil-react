import React, { Component } from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import Full from './containers/Full/'
import Login from './pages/Login/'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" name="Login" component={Login}/>
          <Route path="/" name="Home" component={Full}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App
