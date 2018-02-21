import React from 'react';
import { Link } from 'react-router-dom';

const SubcategoryItem = ({subcategory}) => {
  return (
    <Link className="forum-category" to="#">
      <span className="forum-category-logo" style={{backgroundImage:"url('images/cat-img.png')"}}></span>
      <div className="forum-category-details">
        <h3>{subcategory.name}</h3>
        <span className="forum-category-description">
          {subcategory.description}
        </span>
      </div>
    </Link>
  );
};

export default SubcategoryItem;