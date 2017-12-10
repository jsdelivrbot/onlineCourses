import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getOneNinja, deleteOneNinja } from '../actions/index.js';

class OnePostDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOneNinja(id);
  }

  handleClick() {
    console.log('deleteClicked');
    const { id } = this.props.match.params;
    this.props.deleteOneNinja(id, () => {
      this.props.history.push('/');
    });
  }
  
  renderOnePost() {
    const onePost = this.props.onePost;
    if (!onePost) {
      return (
        <div className="oneNinjaDetail" />
      );
    }

    return (
      <div className="oneNinjaDetail">
        <div>name: {onePost.name}</div>
        <div>rank: {onePost.rank}</div>
        <div>available: {onePost.available.toString()}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="newPostBtn">
          <Link to="/" className="btn btn-primary">
            HOME
          </Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={() => (this.handleClick())}
          >
            DELETE
          </button>
        </div>
        {this.renderOnePost()}
      </div>
    );
  }
}


function mapStateToProps(state, myOwnProps) {
  return {
    onePost: state.ninjas[myOwnProps.match.params.id]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOneNinja, deleteOneNinja }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePostDetail);
