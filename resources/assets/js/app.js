require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import entities from './reducers/entities.js';
import pagination from './reducers/posts_pagination.js';

import App from './components/App.js';
import Forum from './components/forum/Forum.js';

const rootReducer = combineReducers({
  entities,
  pagination
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/forum' component={Forum} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'))