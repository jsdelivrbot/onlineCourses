import React, { Component } from 'react'


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(input) {
    console.log('value:', input);
    this.setState({
      value: input
    });
    this.props.doYTSearch(input);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.value}
          onChange={(e) => this.handleInputChange(e.target.value)}
          onSubmit={console.log(this.state.value)}
        />       
      </div>
    );
  }
}
