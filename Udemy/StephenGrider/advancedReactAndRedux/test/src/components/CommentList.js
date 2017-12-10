import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {

  const renderList = () => {
    return props.comments.map((comment, idx) => {
      return (
        <li key={idx} >{comment}</li>
      );
    })
  }

  return (
    <ul className="comment-list">
      {renderList()}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList);