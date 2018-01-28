import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return (
      this.props.data.songs.map((song) => {
        return <li className="collection-item" key={song.id}>{song.title}</li>;
      })
    );
  }

  render() {
    if (this.props.data.loading) return <div />;
    console.log('this.props.data: ', this.props.data);
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

const query = gpl`
{
  songs {
    id,
    title
  }
}
`;

export default graphql(query)(SongList);
