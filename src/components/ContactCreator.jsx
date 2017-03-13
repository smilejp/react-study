import React from 'react';

export default class ContactCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', phone: '' };

    this.handleChanged = this.handleChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChanged(evt) {
    const nextState = {};
    nextState[evt.target.name] = evt.target.value;
    this.setState(nextState);
  }

  handleClick(evt) {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({ name: '', phone: '' });
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
            onChange={this.handleChanged}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChanged}
          />
          <button onClick={this.handleClick}>Insert</button>
        </p>
      </div>
    );
  }
}

ContactCreator.propTypes = {
  onInsert: React.PropTypes.func.isRequired,
};
