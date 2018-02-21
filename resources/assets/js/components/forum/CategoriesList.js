import React, { Component, Fragment } from 'react';
import Category from './Category';

class ForumCategoriesList extends Component {
  generateSubcategories(count) {
    let subcategories = new Array(count);

    for (let index = 0; index < count; index++) {
      subcategories[index] = {
        id: index,
        name: 'Subcategory name',
        description: 'Subcategory description'
      }
    }

    return subcategories;
  }

  generateCategories(count) {
    let categories = new Array(count);

    for (let index = 0; index < count; index++) {
      categories[index] = {
        id: index,
        name: 'Name placeholder',
        subcategories: this.generateSubcategories(2)
      }
    }

    return categories;
  }

  render() {
    return (
      <Fragment>
        {this.generateCategories(1).map(category => {
          return <Category key={category.id} category={category} />
        })}
      </Fragment>
    );
  }
}

export default ForumCategoriesList;