import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import { fetchPosts, getWithThunk } from '../actions/index';

class PostIndex extends Component {

  componentDidMount() {
    // this.props.fetchPosts();
    this.props.getWithThunk();
  }
    
  renderPost() {
    return _.map(this.props.posts, (post) => {
      return (
        <Link to={`/post/${post.id}`} key={post.id}>
          <li className="list-group-item">{post.title}</li>
        </Link>
      );
    });
  }

  render() {
    // this.props.fetchPosts();
    console.log('posts: ', this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/create/new" className="btn btn-primary">
            create new post
          </Link>
        </div>
        <h3>POST</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>

      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('state: ', state);
  
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts, getWithThunk })(PostIndex);

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(PostIndex);
