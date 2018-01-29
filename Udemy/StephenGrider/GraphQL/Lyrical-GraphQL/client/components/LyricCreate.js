import React, { Component } from 'react';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('lyrics is submitted');
    this.setState({ userInput: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <label>Create Lyric:</label>
          <input
            type="text"
            value={this.state.userInput}
            onChange={e => {
              this.setState({ userInput: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default LyricCreate;
