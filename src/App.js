import React, { Component } from "react";
// add components here
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import CatCard from "./components/CatCard"
import images from "./images.json";

class App extends Component {
  state = {
    images: images,
    score: 0,
    hiscore: 0,
    clicked: false
  };


  clickChoice = (images) => {
    console.log(images)
    // randomize
    var currentIndex = images.length
    var tempVal = 0
    var randIndex = 0
    while (currentIndex != 0) {
      randIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      tempVal = images[currentIndex];
      images[currentIndex] = images[randIndex]
      images[randIndex] = tempVal
      return this.setState({
        images: images
      })
    }

    // score
    if (this.state.clicked === false) {
      this.state.clicked = true
    }
    this.state.score++;

    // checks hiscore
    if (this.state.score > this.state.hiscore) {
      this.state.hiscore = this.state.score
    }
    else {
      this.state.score = 0;
    }
    return this.state.score;
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          {this.state.images.map(catPic => (
            <CatCard name={catPic.name} pic={catPic.pic} id={catPic.id} clicked={catPic.clicked} A clickChoice={this.clickChoice} />
          ))}
        </Wrapper>

      </div>

    );
  }
}

export default App;
