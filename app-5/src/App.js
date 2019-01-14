import React, { Component } from 'react';
import Image from "./Componets/Image"
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barn-owl-1528898132.jpg?crop=0.861xw:0.820xh;0,0.0803xh&resize=480:*",
      alt: "Owl",
    }
  }
  render() {
    return (
      <div className="App">
        <Image source={this.state.src} alternate={this.state.alt}/>
      </div>
    );
  }
}

export default App;
