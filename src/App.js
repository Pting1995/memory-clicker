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
  }
}

// function checkPic(props) {
//   if (props.clicked === false) {
//     setState(prevState => {
//       let props = Object.assign({}, prevState.jasper);
//       props.clicked = false
//       return props
//     })
//     console.log(props.clicked)
//     score++;
//     // checks hiscore
//     if (score > hiscore) {
//       hiscore = score
//     }

//   } else {
//     score = 0;
//   }
//   return score;
// }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          {this.state.images.map(catPic => (
            <CatCard name={catPic.name} pic={catPic.pic} id={catPic.id} clicked={catPic.clicked} handleClick={this.handleClick} />
          ))}
        </Wrapper>

      </div>

    );
  }
}

export default App;
