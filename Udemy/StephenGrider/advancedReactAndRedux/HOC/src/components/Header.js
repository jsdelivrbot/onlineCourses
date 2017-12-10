import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { toggleUserLogin } from '../actions/index';



class Header extends Component {

  handleClick() {
    // console.log('this.props.isLoggedIn: ', this.props);
    this.props.toggleUserLogin(this.props.isLoggedIn);
  }

  authButton() {
    if (this.props.isLoggedIn) {
      return (
        <button onClick={this.handleClick.bind(this)}> SIGN OUT </button>
      );      
    }
    return (
      <button onClick={this.handleClick.bind(this)}> SIGN IN </button>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div>
         <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link to="/">HOME</Link>  
            </li>
            <li className="nav-item">
               <Link to="/resources">RESOURCES</Link> 
            </li>
            <li className="nav-item">
               {this.authButton()}
            </li>
          </ul>          
        </nav> 
      </div>
    )
  }
}

function mapStateToProps({ isLoggedIn }) {
  return { isLoggedIn };
}

export default connect(mapStateToProps, { toggleUserLogin })(Header);
