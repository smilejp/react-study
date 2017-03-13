import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import RandomNumber from './RandomNumber.jsx';
import Contacts from './Contacts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: Math.round(Math.random() * 100) };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    this.setState({ value: randomValue });
  }

  render() {
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content title={this.props.contentTitle} body={this.props.contentBody} />
        <RandomNumber number={this.state.value} onUpdate={this.updateValue} />
        <Contacts />
      </div>
    );
  }
}

export default App;

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody',
};

App.propTypes = {
  headerTitle: React.PropTypes.string,
  contentTitle: React.PropTypes.string,
  contentBody: React.PropTypes.string,
};

