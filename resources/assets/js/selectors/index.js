import { createSelector } from 'reselect';

const getPosts = state => state.entities.posts;
const getIds = state => state.pagination.ids;

export const getAllPosts = createSelector(
  [ getPosts, getIds ], (posts, ids) => {
    return ids.map(id => posts[id]);
  }
)