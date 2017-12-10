import React, { Component } from 'react'

import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Auth extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      // this.props.history.push('/');
      if (!this.props.isLoggedIn) this.props.history.push('/');
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isLoggedIn) this.props.history.push('/');
    }
    
    

    render() {
      // console.log('state:', this.props.isLoggedIn);
      // console.log(this.context);
      // console.log('prop:', this.props);
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  function mapStateToProps({ isLoggedIn }) {
    return { isLoggedIn };
  }

  return connect(mapStateToProps)(Auth);
} 


