import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { postOnePost } from '../actions/index';



export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    )
  }
}
