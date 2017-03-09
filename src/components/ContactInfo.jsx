import React from 'react';

export default class ContactInfo extends React.Component {
  render() {
    return (
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}

ContactInfo.defaultProps = {
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
};
