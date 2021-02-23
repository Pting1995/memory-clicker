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
    clicked: false,
  };

  clickChoice = (id, clicked) => {
    // console.log(images)

    if (clicked === false) {
      console.log(images)

      // score++
      var newScore = this.state.score + 1
      // console.log(newScore)
      if (newScore > this.state.hiscore) {
        this.state.hiscore = newScore
      }

      var img = this.state.images

      img.forEach((image, index) => {
        if (id === image.id) {
          img[index].clicked = true;
        }
      })

      return this.setState({
        // randomize
        images: img.sort(() => Math.random() - 0.5),
        score: newScore,
        clicked: true
      })
    }
    // u lose
    else {
      // reset but keep hiscore
      images.forEach((index) => {index.clicked = false})
      return this.setState({
        score: 0
      })
    }
    // checks hiscore
  }
    render() {
      return (
        <div>
          <Navbar score={this.state.score} hiscore={this.state.hiscore}></Navbar>
          <Wrapper>
            {this.state.images.map(catPic => {
              return (<CatCard name={catPic.name} pic={catPic.pic} id={catPic.id} clicked={catPic.clicked} clickChoice={this.clickChoice} />
              )
            }
            )}
          </Wrapper>

        </div>

      );
    }
  }

  export default App;
