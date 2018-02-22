import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PostsList from './PostsList';
import PostPage from './PostPage';
import OnlineList from './OnlineList';
import PostForm from './PostForm';
import EditAccount from './EditAccount';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-section">
          <div className="main-section-content">
            <Switch>
              <Route exact path='/accounts/:account/edit' component={EditAccount} />
              <Route exact path='/online' component={OnlineList} />
              <Route path='/posts/create' render={() => <PostForm action='Add' />} />
              <Route path='/posts/:post/edit' render={() => <PostForm action='Edit' />} />
              <Route path='/posts/:post' component={PostPage} />
              <Route component={PostsList} />
            </Switch>
            <Sidebar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;