import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <h1>Value:{this.props.value}</h1>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counter.value,
});

Counter = connect(mapStateToProps)(Counter);

export default Counter;
