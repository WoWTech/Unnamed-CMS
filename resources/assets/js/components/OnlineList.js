import React, { Component } from 'react';

class OnlineList extends Component {
  render() {
    return (
      <section className="page-content">
        <header>
          <h2>Players online</h2>
        </header>
        <table className="online-table">
          <tbody>
            <tr>
              <td className="character-level">80 lvl</td>
              <td className="character-className"><img src="../images/classes/class-1.png" alt=""/></td>
              <td className="character-faction"><img src="../images/factions/horde.png" alt=""/></td>
              <td className="character-name">Username</td>
            </tr>
            <tr className="separator"></tr>
            {/* <p className="notofication"> No players found </p> */}
          </tbody>
        </table>

      </section>
    );
  }
}

export default OnlineList;