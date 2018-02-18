import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PostsList from './PostsList';
import PostPage from './PostPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-section">
          <div className="main-section-content">
            <Route exact path='/' component={PostsList} />
            <Route path='/posts/:post' component={PostPage} />
            <Sidebar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;