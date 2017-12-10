import React, { Component } from 'react'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { signoutUser } from '../actions/index'

class Header extends Component {

  constructor(props) {
    super(props);
  }
  

  renderAuthState() {
    // console.log('this.props.authenticated: ', this.props.authenticated);
    if (this.props.authenticated) {
      return (
        <li className="nav-item" key="SingOut">
          <Link className="nav-link" to="/signout"> Sign Out </Link>
        </li>
      );
    }
    return (
      [ <li className="nav-item" key="SignIn">
        <Link className="nav-link" to="/signin"> Sign In </Link>
      </li>,
      <li className="nav-item" key="SignUp">
        <Link className="nav-link" to="/signup"> Sign up </Link>
      </li> ]
    );
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-light">
          <Link to='/' className="navbar-brand"> Redux Auth </Link>
          <ul className="nav navbar-nav">
            {this.renderAuthState()}
          </ul>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { signoutUser })(Header);
