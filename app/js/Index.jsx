/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import OCCProps from './context'

import RouterListener from './router/RouterListener';
import Home from './pages/Home'
import DLTest from "./pages/DLTest";

const Index = props => (
  <Router>
    <OCCProps.Consumer>{ occProps =>
      (<RouterListener {...occProps}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/dltest" component={DLTest}/>
        </div>
      </RouterListener>)}
    </OCCProps.Consumer>
  </Router>
);

export default Index;


