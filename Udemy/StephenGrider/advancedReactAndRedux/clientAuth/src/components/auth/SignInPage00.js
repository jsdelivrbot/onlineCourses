import React from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/index';

import SignInForm00 from './SignInForm00';

class SignInPage00 extends React.Component {
  submit({ email, password }) {
    // console.log('{ email, password }: ', { email, password });
    this.props.signinUser({ email, password }, this.props.history);
  }
  render() {
    return (
      <div>
         <SignInForm00 onSubmit={this.submit.bind(this)} />  
      </div>
    )
  }
}

export default connect(null, { signinUser })(SignInPage00);