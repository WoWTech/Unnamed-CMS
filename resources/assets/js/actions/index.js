import { normalize, schema } from 'normalizr';

export const REQUEST_POSTS = 'REQUETS_POSTS';
export const RECEIVE_POSTS = 'RECIEVE_POSTS';

const post = new schema.Entity('posts');

const formatPostsResponse = ({ data, next_page_url }) => ({
  ...normalize(data, [ post ]),
  next_page_url
})

const requets_posts = () => ({
  type: REQUEST_POSTS
});

const receive_posts = response => ({
  type: RECEIVE_POSTS,
  response
})

export const fetchPosts = () => dispatch => {
  const { axios } = window;

  dispatch(requets_posts());

  axios.get('http://localhost:8080/api/posts')
    .then(({ request: { response } }) => JSON.parse(response))
    .then(response => formatPostsResponse(response))
    .then(formatted => dispatch(receive_posts(formatted)));
}