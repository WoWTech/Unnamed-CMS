require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App.js';
import Forum from './components/forum/Forum.js';

render(
  <Router>
    <Switch>
      <Route path='/forum' component={Forum} />
      <Route path='/' component={App} />
    </Switch>
  </Router>, document.getElementById('root'))