import React, { Component } from 'react';
import NewTopic from './NewTopic'
import TopicItem from './TopicItem';

class Subcategory extends Component {
  handleClick() {
    const menu = document.querySelector('.create-topic-block');
    const style = window.getComputedStyle(menu).getPropertyValue('display');
    
    let display = style == 'none' ? 'flex' : 'none';

    menu.style.display = display;
  }

  render() {
    return (
      <section className="forum-category">
        <header>
          <span className="logo" style={{backgroundImage: "url('/images/cat-img.png')"}}></span>
          <h2>Category name</h2>
  
          <aside>
            <input type="text" name="search" />
            <a href="javascript:void(0)" onClick={this.handleClick} className="new-topic red-button">New topic</a>
          </aside>
        </header>
  
        <div className="content">
          <NewTopic />
  
          <table>
            <tbody>
              {/* <div class="no-topics">
                No topics in this category :(
              </div> */}
              <TopicItem />
              <TopicItem />
            </tbody>
          </table>
        </div>
  
      </section>
    );
  }
}

export default Subcategory;