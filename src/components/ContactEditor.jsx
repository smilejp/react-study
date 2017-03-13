import React from 'react';

export default class ContactEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', phone: '' };

    this.handleClick = this.handleClick.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
  }

  handleClick() {
    if (!this.props.isSelected) return;

    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChanged(evt) {
    const nextState = {};
    nextState[evt.target.name] = evt.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Edit</button>
        </p>
      </div>
    );
  }
}


ContactEditor.propTypes = {
  isSelected: React.PropTypes.bool.isRequired,
  onEdit: React.PropTypes.func.isRequired,
};
