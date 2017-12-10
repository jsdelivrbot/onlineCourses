import React, { Component } from 'react'

import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Auth extends Component {
    componentWillMount() {
      // this.props.history.push('/');
      if (!this.props.authenticated) this.props.history.push('/');
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.authenticated) this.props.history.push('/');
    }



    render() {
      // console.log('state:', this.props.authenticated);
      // console.log(this.context);
      // console.log('prop:', this.props);
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Auth);
}


