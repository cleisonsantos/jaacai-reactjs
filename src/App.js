import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu/Menu';
import Abas from './components/Abas/Abas';

import Home from './pages/Home/Home';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <Abas />
      </div>
    );
  }
}

export default App;
