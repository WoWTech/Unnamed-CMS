import React, { Component } from 'react';
import CommentsSection from './CommentsSection';
import { fetchPost } from '../actions';
import { getCommentsWithAuthors } from '../selectors';
import { connect } from 'react-redux';
import Loader from './Loader';
import Post from './Post';

class PostPage extends Component {
  componentDidMount() {
    const { fetchPost, match } = this.props;

    fetchPost(match.params.post);
  }

  render() {
    const { post, comments, next_page_url, fetchPost, isFetching } = this.props;
    const postId = this.props.match.params.post;
    return (
      <section className="view-post">
        { post 
            ? <Post post={ post }>
                { comments && <CommentsSection 
                                fetchPost={ fetchPost } 
                                comments={ comments } 
                                next_page_url={ next_page_url }
                                postId={postId}
                                isFetching={isFetching}
                                /> 
                }
              </Post>
            : <Loader />
        }
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.post;
  const { posts } = state.entities;
  const comments = state.pagination.comments[id]
  const template = { next_page_url: null, isFetching: null };
  const { next_page_url, isFetching } = comments || template;

  return {
    post: state.entities.posts[id],
    comments: getCommentsWithAuthors(state, props),
    next_page_url,
    isFetching
  }
}

export default connect(mapStateToProps, { fetchPost })(PostPage);