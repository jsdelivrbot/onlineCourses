import React, { Component } from 'react'

import { connect } from 'react-redux';

import { fetchUser } from '../actions'

class Users extends Component {
  constructor(props) {
    super(props);
    
  }
  

  componentDidMount() {
    this.props.fetchUser();
    // console.log('this.props: ', this.props);
  }

  renderUsers() {
    console.log(this.props);
    return this.props.users.map((user, idx) => {
      return (
        <div key={idx} className="card card-block">
          <div className="card-title">{user.name}</div>
          <div className="card-text">{user.company.name}</div>
          <a href={user.website} className="btn btn-info">Website</a>
        </div>
      )
    })
  }

  render() {
    // console.log('why?');
    return (
      <div className="user-list">
        {this.renderUsers()}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUser })(Users);

