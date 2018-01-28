import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// graphql
import fetchSongs from '../queries/fetchSongs';

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
      <div>
      <ul className="collection">
        {this.renderSongs()}
      </ul>
      <Link to='/songs/new' className="btn-floating btn-large red right">
        <i className="material-icons"> add </i>
      </Link>
      </div>
    );
  }
}



export default graphql(fetchSongs)(SongList);
