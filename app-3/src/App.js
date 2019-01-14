import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state ={
      list: ["sushi", "bolagna", "ice cream", "chesse", "spagetti"],
      userInput: ""
    }
  }

  updateInput(value)
  {
    this.setState({
      userInput: value
    })
  }

  render() {
    let contents = [];
    for(let i = 0; i < this.state.list.length; i++)
    {
      if(this.state.list[i].includes(this.state.userInput))
      {
        contents.push(<h2 key={i}> {this.state.list[i]} </h2>);
      }
    }
   
    return (
      <div className="App">
      <input
      onChange={(event) => this.updateInput(event.target.value) }/>
        {contents}
      </div>
    );
  }
}

export default App;
