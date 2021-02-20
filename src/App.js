import React, { Component } from "react";
// add components here
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import CatCard from "./components/CatCard"
import images from "./images.json";

class App extends Component {
  state = {
    images: images
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          {this.state.images.map(catPic => (
            <CatCard name={catPic.name} pic={catPic.pic} />
          ))}
        </Wrapper>

      </div>

    );
  }
}

export default App;
