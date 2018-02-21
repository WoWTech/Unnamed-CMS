import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Navigation from './Navigation';
import Subcategory from './Subcategory';

class Forum extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div className='forum-body'>
        <div className="page-logo"></div>
        <Navigation />
        <div className="forum">
          <Switch>
            <Route path={`${path}/:category`} component={Subcategory} />
            <Route component={CategoriesList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Forum;