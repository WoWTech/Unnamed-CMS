import { normalize, schema } from 'normalizr';
import merge from 'lodash/merge';

export const REQUEST_POSTS = 'REQUETS_POSTS';
export const REQUEST_POST = 'REQUETS_POST';
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
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

const formatPostResponse = (response, id, store_comments) => {
  const posts = normalize(response.post, post)
  const { data } = response.comments;
  const comments = normalize(data, [comment]);

  const {
    current_page,
    next_page_url
  } = getUpToDateResource(store_comments, response.comments);

  delete posts['result'];

  return {
    ...merge(posts, comments),
    next_page_url,
    current_page,
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

const request_comments = postId => ({
  type: REQUEST_COMMENTS,
  postId
})

export const fetchPosts = () => (dispatch, getState) => {
  const { axios } = window;
  const { next_page_url } = getState().pagination.posts;

  dispatch(requets_posts());

  axios.get(next_page_url ? next_page_url : `${API}/posts` )
    .then(data => getJSON(data))
    .then(json => formatPostsResponse(json))
    .then(formatted => dispatch(receive_posts(formatted)));
}

export const fetchPost = (id, next_page_url = null) => (dispatch, getState) => {
  const { axios } = window;
  const comments = getState().pagination.comments[id];

  next_page_url 
    ? dispatch(request_comments(id)) 
    : dispatch(requets_post(id));
  
  axios.get(next_page_url ? next_page_url : `${API}/posts/${id}`)
    .then(data => getJSON(data))
    .then(json => formatPostResponse(json, id, comments))
    .then(formatted => dispatch(receive_post(formatted)));
}

/* 
  When user loaded comments (2+ pages) on the post page,
  moves to the previous page and than again clicks on
  the post, it can cause refetching of already fetched
  comments, because refetched post reset comments next_page.
  That is why, it's important to use already stored link
  in the pagination.comments[post_id] piece of store if it's
  defined (even if the link is null, which indicates the end
  of the comments list).
*/

const getUpToDateResource = (resource, fetched_resource) => {
  const page_defined = resource && typeof resource.current_page !== undefined;

  if (page_defined && resource.current_page >= fetched_resource.current_page)
    return resource;

  return fetched_resource;
}

const getJSON = data => JSON.parse(data.request.response);