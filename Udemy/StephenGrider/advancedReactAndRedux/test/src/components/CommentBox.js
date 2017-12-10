import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { saveComment } from '../actions';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  
  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.input);
    this.setState({ input: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        ></textarea>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);
