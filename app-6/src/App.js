import React, { Component } from 'react';
import './App.css';
import List from './Components/List'

class App extends Component {
  constructor()
  {
    super();

    this.state= {
      list: [],
      userInput: ""
    }
  }

  updateUserInput(value)
  {
    this.setState({
      userInput: value
    })
  }

  updateList()
  {
    let listCopy = this.state.list.slice()
    listCopy.push(this.state.userInput)
    
    this.setState({
      list: listCopy,
      userInput: ""
    });;
  }
  render() {
    return (
      <div className="App">
      <input
      onChange={(event) => this.updateUserInput(event.target.value) }
      placeholder={"Enter new task"}/>
      <button
      onClick={() => this.updateList()}
      >
        Add
      </button>
        <List toDo={this.state.list}/>
      </div>
    );
  }
}

export default App;
