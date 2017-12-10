import React, { Component } from 'react'
import { connect } from 'react-redux';

import { signoutUser } from '../../actions/index';

class SignOut extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        <h1> Come back again ~ </h1>
      </div>
    )
  }
}

export default connect(null, { signoutUser })(SignOut);
