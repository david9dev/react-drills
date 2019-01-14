import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state ={
      user: "",
      password: ""
    }
  }
  updateUser(value)
  {
    this.setState({
      user: value
    });
  }

  updatePassword(value)
  {
    this.setState({
      password: value
    });
  }
  handleLoginIn()
  {
    alert(`User: ${this.state.user} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div className="App">
      <span>
        User:
      </span>
      <input
      onChange={(event) => this.updateUser(event.target.value)}/>
      <span>
        Password:
      </span>
      <input
      onChange={(event) => this.updatePassword(event.target.value)}/>
      <button
      onClick={() => this.handleLoginIn()}>
        Login
      </button>

      </div>
    );
  }
}

export default App;
