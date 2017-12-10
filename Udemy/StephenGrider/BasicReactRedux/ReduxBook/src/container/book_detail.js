import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  
  render() {
    let book = this.props.book;
    if (!book) return (<div> Nothing has been selected </div>);
    return (
      <div>
        {this.props.book.title}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);