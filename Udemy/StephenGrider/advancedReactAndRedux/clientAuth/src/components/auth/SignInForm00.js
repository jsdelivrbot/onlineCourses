import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

const SignInForm00 = (props) => {
  const { handleSubmit } = props

  function renderErrMssg() {
    if (props.errMssg) {
      return (
        <div className="alert alert-danger">
          <strong>Typed Wrong Password</strong>
        </div>
      );
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field className="form-control" name="email" component="input" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field className="form-control" name="password" component="input" type="password" />
      </div>
      {renderErrMssg()}
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
};

function mapStateToProps(state) {
  return {
    errMssg: state.auth.errMssg
  }
}

export default reduxForm({
  form: 'signin'
})(connect(mapStateToProps)(SignInForm00));
