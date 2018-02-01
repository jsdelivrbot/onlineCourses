import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  constructor(props) {
    super(props);
    this.onLike = this.onLike.bind(this);
  }

  onLike(id, likes) {
    // console.log('id: ', id);
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              onClick={() => {
                this.onLike(id, likes);
              }}
              className="material-icons"
            >
              thumb_up
            </i>
            <span>{likes}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

const mutation = gpl`
mutation LinkLyric($id: ID){
  likeLyric(id: $id) {
    id
    likes
    content
    song {
      id
    }
  }
}
`;

export default graphql(mutation)(LyricList);
