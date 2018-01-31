import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import fetchSongs from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongs }],
      })
      .then(() => {
        hashHistory.push('/');
      })
      .catch((err) => {
        console.log('err: ', err);

      });
  }

  render() {
    return (
      <div>
        <Link to="/"> Back </Link>
        <h3>Song Create</h3>
        <form onSubmit={this.handleSubmit} action="">
          <label>Song Title:</label>
          <input type="text" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
        </form>
      </div>
    );
  }
}

const mutation = gpl`
mutation AddSong ($title: String){
  addSong(title: $title) {
    id,
    title
  }
}
`;

// const mutation = gpl`
//   addSong() {
//     id,
//       title
//   }
// `;

export default graphql(mutation)(SongCreate);
// export default SongCreate;
