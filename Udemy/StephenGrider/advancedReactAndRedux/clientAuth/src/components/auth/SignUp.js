import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser, authErr } from '../../actions/index';

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  
// 	<div>
// 		<label>{label}</label>
// 		<div>
//       <input className="form-control" {...input} placeholder={label} type={type} />
// 			{touched && (error && <span style={{color: 'red'}}>{error}</span>)}
// 		</div>
// 	</div>
// );

// const SignUp = props => {
// 	const { handleSubmit } = props;
// 	const getSubmittedVals = ({ email, password }) => {
// 	console.log('values: ', { email, password });
// 		props.signupUser({ email, password }, props.history);
// 	};
// 	console.log('errMssg:', props.errMssg);
// 	return (
// 		<div>
// 			<form className="form-group" onSubmit={handleSubmit(getSubmittedVals)}>
// 				<Field name="email" type="email" component={renderField} label="Email" />
// 				 <Field name="password" type="password" component={renderField} label="Password" /> 
//          <Field name="confirmPassword" type="password" component={renderField} label="ConfirmPassword" /> 
// 				<div>
// 					<button className="btn btn-primary" type="submit">Submit</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

let emailStorage = {

}

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.getSubmittedVals = this.getSubmittedVals.bind(this);
		this.renderField = this.renderField.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}


	getSubmittedVals({ email, password }) {
		emailStorage[email] = email;
		this.props.signupUser({ email, password }, this.props.history);
	};

	handleFocus() {
		if (this.props.authErr) {
			this.props.authErr(null);
		}
	}

	renderField({ input, label, type, meta: { touched, error, warning } }) {
		input.onFocus = this.handleFocus;
		// console.log('input: ', input);
		// console.log('input.onFocus: ', input.onFocus);

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

	renderErr() {
		if(this.props.errMssg) {
			return (
				<div className="danger" style={{ color: 'red' }}>
					email is in used
				</div>
			)
		}
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form className="form-group" onSubmit={handleSubmit(this.getSubmittedVals)}>
					<Field name="email" type="email" component={this.renderField} label="Email" />
					<Field name="password" type="password" component={this.renderField} label="Password" />
					<Field name="confirmPassword" type="password" component={this.renderField} label="ConfirmPassword" />
					<div>
						{this.renderErr()}
						<button className="btn btn-primary" type="submit">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}


const validate = values => {
  const errors = {}

	if (!values.email) errors.email = 'Required';
	if (emailStorage[values.email] !== undefined) {
		errors.email = 'email is in used';
	}
  if (!values.password) errors.password = 'Required';
  if (!values.confirmPassword) errors.confirmPassword = 'Required';
  if (values.password !== values.confirmPassword) errors.confirmPassword = 'Password does not match';

  return errors;
}

// const asyncValidate = values => {
// 	const errors = {}

// 	if (!values.email) errors.email = 'Required';
// 	if (emailStorage[values.email] !== undefined) {
// 		errors.email = 'email is in used';
// 	}
// 	if (!values.password) errors.password = 'Required';
// 	if (!values.confirmPassword) errors.confirmPassword = 'Required';
// 	if (values.password !== values.confirmPassword) errors.confirmPassword = 'Password does not match';

// 	return errors;
// }

const mapStateToProps = ({ auth }) => {
	return {
		errMssg: auth.errMssg
	};
}

export default reduxForm({
  form: 'signup',
	validate,
	
})(connect(mapStateToProps, { signupUser, authErr })(SignUp));

// asyncValidate,