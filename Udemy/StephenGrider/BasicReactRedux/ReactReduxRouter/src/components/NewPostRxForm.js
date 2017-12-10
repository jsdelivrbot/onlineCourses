import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postOnePost } from '../actions/index';

import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';

class NewPostRxForm extends Component {
	renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`

		return (
      <div className={className}>
				<lable>{field.lable}</lable>
				<input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>

			</div>
		);
  }

  onSubmit(values) {
    console.log(values);
    this.props.postOnePost(values, () => {
      console.log('what ??????????????');
      this.props.history.push('/');
    });
  }

	render() {
    const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field lable="Title" name="title" component={this.renderField} />
					<Field lable="Categories" name="categories" component={this.renderField} />
					<Field lable="Content" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
  // console.log(values) // {title: dfd, categories: fdfd, content: ff}
  const error = {};

  if (!values.title) error.title = 'Enter a title';
  if (!values.categories) error.categories = 'Enter a categories';
  if (!values.content) error.content = 'Enter a content';

  // if error is empty, the form is fine to submit
  // if error has *any* properties redux form assume form is invalid
  return error;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postOnePost }, dispatch);
}

export default reduxForm({
  validate,
  form: 'NewPostRxForm'
})(
  connect(null, mapDispatchToProps)(NewPostRxForm)
);

// export default NewPostRxForm;
