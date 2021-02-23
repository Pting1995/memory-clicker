# Memory Clicker

## Description
This app lets you track your workouts! When you first use the app only the "new workout" button should appear! Click this and you will be able to enter a cardio or a resistance workout, and then be able to enter more information. This will be saved and if you go to the dashboard the information you entered will be displayed! The front-end components were provided, so I worked in the backend. I added a server.js, workout.js model, and the API and HTML routes.

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