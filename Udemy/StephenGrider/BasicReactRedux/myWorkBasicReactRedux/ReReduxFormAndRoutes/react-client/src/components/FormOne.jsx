import React, { Component } from 'react';

import { reset, reduxForm, Field } from 'redux-form';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { postOneNinja } from '../actions/index.js';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <div>
        <input {...input} className="form-control" placeholder={label} type={type} />
        {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
      </div>
    </div>
  );
};

const renderOption = ({ input, label, type, meta: { touched, error } }) => {
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <div>
        <select {...input} className="form-control">
          <option />
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </div>
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  );
};

const FormOne = (props) => {
  const { handleSubmit } = props;

  const submitMyForm = (values) => {
    console.log('values: ', values);

    props.postOneNinja({
      name: values.name,
      rank: values.rank,
      available: values.available,
    }, () => {
      props.history.push('/');
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(submitMyForm)}>
        <Field label="Name" name="name" component={renderField} />
        <Field label="Rank" name="rank" component={renderField} />
        <Field label="available" name="available" type="select" component={renderOption} />
        <button style={{ marginRight: 10 }} type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>

    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'need to have name';
  if (!values.rank) errors.rank = 'need to have rank';
  if (!values.available) errors.available = 'need to have available';
  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset('form1'));
};

export default reduxForm({
  validate,
  form: 'form1',
  onSubmitSuccess: afterSubmit,
})(connect(null, { postOneNinja })(FormOne));

