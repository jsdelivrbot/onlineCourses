import React, { Component } from 'react';

export default class LyricList extends Component {
  onLink(id) {
    console.log('id: ', id);
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i
            onClick={() => {
              this.onLink(id);
            }}
            className="material-icons"
          >
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}
