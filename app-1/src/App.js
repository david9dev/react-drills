import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state= {
      userInput: ""
    }
  }
  updateInput(value)
  {
    this.setState({
      userInput: value
    });
  }
  render() {
    return (
      <div className="App">
      <input
      onChange={(event) => this.updateInput(event.target.value)}/>
      <h4>
        {this.state.userInput}
      </h4>
      </div>
    );
  }
}

export default App;
