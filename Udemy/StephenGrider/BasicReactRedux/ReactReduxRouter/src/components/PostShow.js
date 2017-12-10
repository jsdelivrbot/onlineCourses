import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchPost, deletePost } from '../actions/index';

import { Link } from 'react-router-dom';

import PostIndex from './PostIndex';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  handleClick() {
    const { id } = this.props.match.params;
    console.log('this.props: ', this.props);
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
    
    
  }

  render() {
    const { post } = this.props;
    if (!post) return (<div>Loading...</div>)

    return (
      <div>
        <Link to="/" component={PostIndex} className="btn btn-primary">
          Back to Idx
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.handleClick.bind(this)}
        >
          DELETE
        </button>
        
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, myOwnProps) {
  return { post: posts[myOwnProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);


