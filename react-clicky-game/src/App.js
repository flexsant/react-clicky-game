import React, { Component } from "react";
import data from "./data.json";
import Navbar from "./components/Navbar";
import ClickImage from "./components/ClickImage";

class App extends Component {
  //state
 
  //Function to shuffle data array
  //function to reset the data change all the clicked values to false
 
  //function to handle image click
  
  //function to handle a good guess
 
  //function to handle a bad guess
  render() {
    return (
      <div>
        <Navbar
          result={this.state.result}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            <h2 className="mx-auto">
              Click on an image to earn points, but don't click on any more than
              once.
            </h2>
          </div>
          <div className="row">
            {this.state.data.map(item => (
              <ClickImage
                handleImageClick={this.handleImageClick}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
