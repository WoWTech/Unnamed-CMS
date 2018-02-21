import React from 'react';
import SubcategoryItem from './SubcategoryItem';

const Category = ({category}) => {
  return (
    <section>
      <header>
        <h2>{category.name}</h2>
      </header>
      <div className="forum-categories">
        {category.subcategories.map(forum => {
          return <SubcategoryItem key={forum.id} subcategory={forum} />;
        })}
      </div>
    </section>
  );
};

export default Category;