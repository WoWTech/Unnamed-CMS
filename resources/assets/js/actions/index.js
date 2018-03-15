import { normalize, schema } from 'normalizr';
import merge from 'lodash/merge';

export const REQUEST_POSTS = 'REQUETS_POSTS';
export const REQUEST_POST = 'REQUETS_POST';
export const RECEIVE_POSTS = 'RECIEVE_POSTS';
export const RECEIVE_POST = 'RECIEVE_POST';

const post = new schema.Entity('posts');
const user = new schema.Entity('accounts', {}, { idAttribute: 'username' });
const comment = new schema.Entity('comments', {
  account: user
});

const API = 'http://localhost:8080/api';

const formatPostsResponse = ({ data, next_page_url }) => ({
  ...normalize(data, [post]),
  next_page_url
})

const formatPostResponse = (response, id) => {
  const posts = normalize(response.post, post)
  const { data, next_page_url } = response.comments;
  const comments = normalize(data, [comment]);
  
  delete posts['result'];
  
  return {
    ...merge(posts, comments),
    next_page_url,
    postId: id
  }
}

const requets_posts = () => ({
  type: REQUEST_POSTS
});

const requets_post = id => ({
  type: REQUEST_POST,
  postId: id
});

const receive_posts = response => ({
  type: RECEIVE_POSTS,
  response
})

const receive_post = response => ({
  type: RECEIVE_POST,
  response
})

export const fetchPosts = () => dispatch => {
  const { axios } = window;

  dispatch(requets_posts());

  axios.get(`${API}/posts`)
    .then(({ request: { response } }) => JSON.parse(response))
    .then(json => formatPostsResponse(json))
    .then(formatted => dispatch(receive_posts(formatted)));
}

export const fetchPost = id => dispatch => {
  const { axios } = window;

  dispatch(requets_post(id));

  axios.get(`${API}/posts/${id}`)
    .then(({ request: { response } }) => JSON.parse(response))
    .then(json => formatPostResponse(json, id))
    .then(formatted => dispatch(receive_post(formatted)));
}