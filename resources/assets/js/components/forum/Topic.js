import React, { Component } from 'react';
import UserInfo from './UserInfo';
import TopicReply from './TopicReply';
import NewReply from './NewReply';

class Topic extends Component {
  render() {
    return (
      <section className="forum-category">
        <header>
          <span className="forum-category-logo" style={{backgroundImage: "url('/images/cat-img.png')"}}></span>
          <h2>Topic title</h2>
          <aside>
            <a href="#" id="new-topic" className="new-topic red-button">New reply</a>
          </aside>
        </header>

        <div className="content topic-replies">
          <TopicReply />
          <TopicReply />

          <NewReply />
        </div>
      </section>
    );
  }
}

export default Topic;