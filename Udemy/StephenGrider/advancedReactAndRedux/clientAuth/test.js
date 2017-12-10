import React, { Component } from 'react'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.getSubmittedVals = this.getSubmittedVals.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  getSubmittedVals({ email, password }) {
    console.log('values: ', { email, password });
    this.props.signupUser({ email, password }, this.props.history);
  };

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input className="form-control" {...input} placeholder={label} type={type} />
          {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit(getSubmittedVals)}>
          <Field name="email" type="email" component={this.renderField} label="Email" />
          <Field name="password" type="password" component={this.renderField} label="Password" />
          <Field name="confirmPassword" type="password" component={this.renderField} label="ConfirmPassword" />
          <div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (

  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
);



const SignUp =  => {
  const { handleSubmit } = this.props;
  const getSubmittedVals = ({ email, password }) => {
    console.log('values: ', { email, password });
    this.props.signupUser({ email, password }, this.props.history);
  };
  console.log('errMssg:', this.props.errMssg);
  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit(getSubmittedVals)}>
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <Field name="confirmPassword" type="password" component={renderField} label="ConfirmPassword" />
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};