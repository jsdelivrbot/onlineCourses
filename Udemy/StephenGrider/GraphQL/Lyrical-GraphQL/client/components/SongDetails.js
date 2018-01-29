import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// queries
import fetchSongById from '../queries/fetchSongById';

class SongDetails extends Component {
  render() {
    console.log('this.props: ', this.props);

    const { song } = this.props.data;
    if (!song) return (<div>loding...</div>);

    return (
      <div>
        <h3> {`Song Title: ${song.title}`} </h3>
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
