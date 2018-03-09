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
    const { post, comments } = this.props;
    return (
      <section className="view-post">
        { post 
            ? <Post post={ post }>
                { comments && <CommentsSection comments={ comments } /> }
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

  return {
    post: state.entities.posts[id],
    comments: getCommentsWithAuthors(state, props)
  }
}

export default connect(mapStateToProps, { fetchPost })(PostPage);