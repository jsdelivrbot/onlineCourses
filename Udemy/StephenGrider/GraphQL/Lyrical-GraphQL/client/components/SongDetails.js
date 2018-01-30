import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// componenets
import LyricCreate from './LyricCreate';

// queries
import fetchSongById from '../queries/fetchSongById';

class SongDetails extends Component {
  constructor(props) {
    super(props);
    this.renderLyrics = this.renderLyrics.bind(this);
  }

  renderLyrics() {
    return(<li className="collection-item">dummyLi</li>);
  }

  render() {
    console.log('this.props: ', this.props);

    const { song } = this.props.data;
    if (!song) return <div>loding...</div>;

    return (
      <div>
        <Link to="/">back</Link>
        <h3> {`Song Title: ${song.title}`} </h3>
        <ul className="collection">{this.renderLyrics()}</ul>
        <LyricCreate songId={song.id}/>
      </div>
    );
  }
}

export default graphql(fetchSongById, {
  options: props => {
    return {
      variables: {
        id: props.params.id,
      },
    };
  },
})(SongDetails);
// export default SongDetails;
