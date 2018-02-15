import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-section">
          <div className="main-section-content">
            <Route exact path='/posts/' component={PostsList} />
            <Route path='/posts/:post' render={() => 'ok2'} />
            <Sidebar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;