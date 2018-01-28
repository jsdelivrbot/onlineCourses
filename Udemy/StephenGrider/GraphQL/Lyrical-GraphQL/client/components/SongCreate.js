import React, { Component } from 'react';
import gpl from 'graphql-tag';
import {graphql} from 'react-apollo';

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
    console.log(this.props);
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }

  render() {
    return (
      <div>
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
