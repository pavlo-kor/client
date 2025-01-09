import React, { Component }from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {


  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }
  render() {
    const { term = '' } = this.props;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find dish"
        value={term}
        onChange={this.onSearchChange}
      />
    );
  }
}