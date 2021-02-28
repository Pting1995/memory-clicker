# Memory Clicker

## Description
This app was designed to challenge the user with a memory test! Upon loading the app, the user will be met with a navbar presenting the current score and highest score. Try your best to click each cat picture once! If you click on a cat, your score will increment and the pictures will be randomized, but if you click on the same cat again then the score will reset and youll have to try again! Try your best to achieve a score of 12! That is a prefect score in this game! Don't get discracted by the cats! It's a tough game! Good luck and have fun!

## Preview of Working Site

![Image](./public/images/memory-clicker-1400x700-demo.gif)

## Deployed Link

* [See Live Site](https://pting1995.github.io/memory-clicker/)

This app is designed to help with your memory! Click a picture, but you better remember which one you clicked! If you click a unique picture you haven't clicked in this session yet the score will increment. If you click a picture you've clicked before this session, your score will go back to 0 and youll have to restart! This is my first project using react!

## Code Snippet
The code below shows the setState functions. In this example, images is being randomize, score is being updated and that specific picture's "clicked" value is being changed to true. If this picture is clicked again another function will run to reset all of the parameters except for the hiscore!

``` JavaScript
return this.setState({
        // randomize
        images: img.sort(() => Math.random() - 0.5),
        score: newScore,
        clicked: true
      })
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [gh-pages](https://pages.github.com/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [Web Vitals](https://web.dev/vitals/)

## Authors

* **Peter Ting**

- [Link to Portfolio](https://portfolio-mk3.herokuapp.com/)
- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)