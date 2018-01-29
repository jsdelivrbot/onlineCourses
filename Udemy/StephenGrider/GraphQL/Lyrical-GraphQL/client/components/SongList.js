import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';

// graphql
import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>
          {song.title}
          <span
            onClick={() => {
              console.log('this.props: ', this.props);
              this.props.mutate({variables: { id: [song.id] }})
                .then(() => {
                  this.props.data.refetch();
                });
            }}
            style={{ color: 'red', cursor: 'pointer', float: 'right' }}
          >
            delete
          </span>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) return <div />;
    console.log('this.props.data: ', this.props.data);
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons"> add </i>
        </Link>
      </div>
    );
  }
}

const mutation = gpl`
mutation DeleteSong ($id:ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

// export default compose(graphql(fetchSongs)(SongList), graphql(mutation)(SongList));
export default compose(graphql(fetchSongs), graphql(mutation))(SongList);

// export default graphql(mutation)(
//   graphql(fetchSongs)(SongList)
// );

// export default graphql(fetchSongs)(SongList);

// export default compose(
//   graphql(mutation),
//   graphql(fetchSongs),
// )(SongList);
