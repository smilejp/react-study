import React from 'react';

export default class ContactRemover extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Remove Selected contact
      </button>
    );
  }
}

ContactRemover.propTypes = {
  onRemove: React.PropTypes.func.isRequired,
};
