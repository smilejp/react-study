import React from 'react';

export default class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }

  render() {
    const getStyle = (isSelect) => {
      if (!isSelect) {
        // return {
        //   fontWeight: 'normal',
        //   backgroundColor: '#fff',
        // };

        return;
      }

      const style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8',
      };

      return style;
    };

    return (
      <li style={getStyle(this.props.isSelected)} onClick={this.handleClick}>{this.props.name} {this.props.phone}</li>
    );
  }
}

ContactInfo.propTypes = {
  name: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  contactKey: React.PropTypes.number.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
};
