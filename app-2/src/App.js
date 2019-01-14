import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      list: ["thing1", "thing2", "thing3", "thing4", "thing5"]
    }
  }

  render() {
    let contents = this.state.list.map((curVal, index) => {
      return (<h2 key={index}>
      {curVal}
      </h2>);
    })
    return (
      <div className="App">
        {contents}
      </div>
    );
  }
}

export default App;
