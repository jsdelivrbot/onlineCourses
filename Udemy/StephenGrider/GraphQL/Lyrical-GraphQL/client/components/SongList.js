import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';

// graphql quires
import fetchSongs from '../queries/fetchSongs';

// css
import '../style/style.css';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li className="collection-item" key={id}>
          <Link to={`songs/${id}`}>{title}</Link>
          <i
            className="material-icons"
            onClick={() => {
              console.log('this.props: ', this.props);
              this.props.mutate({ variables: { id: [id] } }).then(() => {
                this.props.data.refetch();
              });
            }}
          >
            delete
          </i>
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

export default compose(graphql(fetchSongs), graphql(mutation))(SongList);
