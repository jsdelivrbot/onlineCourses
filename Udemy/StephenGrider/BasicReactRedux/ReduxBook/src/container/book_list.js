import React, { Component } from 'react'

import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderBookList() {
    return this.props.books.map((book, idx) => {
      return (
        <li
          key={idx}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          <h1>working ?</h1>
          {this.renderBookList()} 
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything return from this function will be end up as props on the bookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
