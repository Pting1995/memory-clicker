import React, { Component } from "react";
// add components here
import Wrapper from "./components/Wrapper"
import CatCard from "./components/CatCard"
import images from "./images.json";

class App extends Component {
  state = {
    images: images
  };

  render() {
    return (
      <Wrapper>
        {this.state.images.map(catPic => (
          <CatCard name={catPic.name} pic={catPic.pic} />
        ))}
      </Wrapper>

    );
  }
}

export default App;
