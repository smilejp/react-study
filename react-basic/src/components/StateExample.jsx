import React from 'react';

export default class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header Initial State',
      content: 'Content Initial State',
    };

    this.updateHeader = this.updateHeader.bind(this);
  }

  updateHeader(text) {
    this.setState({ header: text });
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
        <button onClick={this.updateHeader}>Update</button>
      </div>
    );
  }
}
