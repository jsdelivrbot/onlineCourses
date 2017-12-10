import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { postOnePost } from '../actions/index';

import { Field, reduxForm } from 'redux-form'


class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titleInput: '',
			categoryInput: '',
			contentInput: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderInput = this.renderInput.bind(this);
	}

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      title: this.state.titleInput,
      categories: this.state.categoryInput,
      content: this.state.contentInput,
    }

    this.props.postOnePost(data);

    this.setState({
      titleInput: '',
      categoryInput: '',
      contentInput: ''
    });
  }

  renderInput(strState) {
    return (
      <input
        onChange={(e) => this.setState({ [strState]: e.target.value })}
        type="text"
        value={this.state[strState]}
        placeholder={strState}
      />
    )
  }

	render() {
		return (
			<div>
				<form className="input-form-group" onSubmit={this.handleSubmit} action="">
          {this.renderInput('titleInput')}
          {this.renderInput('categoryInput')}
          {this.renderInput('contentInput')}
					<button type="submit" className="btn-secondary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postOnePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreatePost);

// export default connect(null, { postOnePost })(CreatePost);
