import React from 'react';
import ReactDOM from 'react-dom';

export default class RandomNumber extends React.Component {
  constructor(props) {
    super(props);

    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    const value = Math.round(Math.random() * 100);
    this.props.onUpdate(value);
  }

  render() {
    return (
      <div>
        <h1>RANDOM Number: {this.props.number} </h1>
        <button onClick={this.updateNumber}>Randomize</button>
      </div>
    );
  }
}

RandomNumber.propTypes = {
  onUpdate: React.PropTypes.func,
  number: React.PropTypes.number,
};
