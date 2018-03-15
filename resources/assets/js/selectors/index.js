import { createSelector } from 'reselect';

const getPosts = state => state.entities.posts;
const getPostsId = state => state.pagination.posts.ids;

const getComments = state => state.entities.comments;
const getCommentIds = (state, props) => {
  const id = props.match.params.post;
  const comments = state.pagination.comments[id];

  return (comments && !comments.isFetching) ? comments.ids : [];
}
const getUsers = state => state.entities.accounts;

export const getAllPosts = createSelector(
  [ getPosts, getPostsId ], (posts, ids) => {
    return ids.map(id => posts[id]);
  }
)
export const getPostComments = createSelector(
  [ getComments, getCommentIds ], (comments, ids) => {
    return ids.map(id => comments[id]);
  }
)

export const getCommentsWithAuthors = createSelector(
  [ getPostComments, getUsers ], (comments, users) => {
    return comments.map(comment => {
      const { username } = users[comment.account];

      return Object.assign({}, comment, { username });
    });
  }
)