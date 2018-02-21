import React, { Component } from 'react';

class TopicItem extends Component {
  toggleMenu(option) {
    this.menu.style.display = option === true
      ? 'block'
      : 'none';
  }

  handleClick() {
    this.toggleMenu(true);
  }

  render() {
    return (
      <tr className="topic" data-id="#">
        <td className="topic-title">
            <div className="manage-topic" onClick={this.handleClick.bind(this)}></div>
            <div 
              ref={(elem) => this.menu = elem}
              className="manage-topic-actions" 
              style={{display: "none"}}
              onMouseLeave={this.toggleMenu.bind(this, false)}>
              <ul>
                <li>
                  <a href="#" className="method-link">Edit</a></li>
                <li>
                  <a href="#" className="method-link" data-method='DELETE'>Delete</a>
                </li>
              </ul>
            </div>
          <i className="topic-icon"></i>
          <a href="#">Topic Title</a>
        </td>
        <td className="topic-replies">
          <i className="replies-icon"></i>
          100
        </td>
        <td className="topic-author">
          Username
        </td>
        <td className="topic-timestamp">
          <time>12 mins ago</time>
        </td>
      </tr>
    );
  }
};

export default TopicItem;