import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import _ from 'lodash';

import { getAllNinja } from '../actions/index.js';


// import NewPost from './NewPost.jsx';

class App extends Component {
  componentDidMount() {
    this.props.getAllNinja();
  }

  renderNinjas() {
    const ninjas = this.props.ninjas;
    // console.log('ninjas:', ninjas);

    return (
      <div className="gridContainer">
        <div className="onePost">form1</div>
        <div className="onePost">form1</div>
        {_.map(ninjas, (ninja, key) => {
          // console.log('ninja: ', ninja);
          return (
            <Link to={`/onePostDetail/${ninja._id}`} key={key}>
              <div className="onePost">
                <div>name: {ninja.name}</div>
                <div>rank: {ninja.rank}</div>
                <div>available: {ninja.available.toString()}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="newPostBtn">
          <Link to="/form" className="btn btn-primary">
            New Post
          </Link>
        </div>
        {this.renderNinjas()}
      </div>
    );
  }
}

// function mapStateToProps ({ ninjas }) {
//   return {
//     state:
//   }
// }

const mapStateToProps = ({ ninjas }) => ({ ninjas });

export default connect(mapStateToProps, { getAllNinja })(App);
