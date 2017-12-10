import React, { Component } from 'react';

import { connect } from 'react-redux';

import { authRequest } from '../actions/index'

class Feature extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.authRequest();
    // if (!this.props.authenticated) {
    //   this.props.history.push('/signin');
    // }
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message
  }
}


export default connect(mapStateToProps, { authRequest })(Feature);
