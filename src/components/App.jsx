import React from 'react';

class App extends React.Component {
  render() {
    const text = 'DEV SERVER';

    const pStyle = {
      color: 'aqua',
      backgroundColor: 'black',
    };

    return (
      <div>
        <h1> HELLO </h1>
        <h2> WELCOME TO {text}</h2>
        <button onClick={this.sayHey}>Click Me</button>
        <p style={pStyle}>{ true ? 'True' : 'False' }</p>
      </div>
    );
  }
}

export default App;
