## React-Clicky-Game
[Site](https://flexsant.github.io/react-clicky-game-2/)
## Summary
Begin by clicking on any of the Simpsons characters and make sure to click a different character each time to see the highest score you can achieve.

## Visual Aids
[Heroku](https://vast-shore-39692.herokuapp.com/)

## User Guides
- 12 of the Simpsons cast members were specially selected for this app
- Start by choosing/clicking a character and the next chosen character must be different. 
- See your highest total score by selecting a different character while the cast gets shuffled around.


## Code Snippet
```Javascript
  //Function to shuffle data array
  shuffle = data => {
    let i = data.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

```
````Javascript
   //function to handle image click
  handleImageClick = id => {
    let goodGuess = false;
    const newData = this.state.data.map(item => {
      const currentItem = { ...item };
      if (id === currentItem.id) {
        if (!currentItem.clicked) {
          currentItem.clicked = true;
          goodGuess = true;
        }
      }
      return currentItem;
    });
    if (goodGuess) {
      this.handleGoodGuess(newData);
    } else {
      this.handleBadGuess(newData);
    }
  };
````

````Javascript
//function to handle a good guess
  handleGoodGuess = data => {
    const newScore = this.state.score + 1;
    //const newTopScore = Math.max(this.state.topScore, newScore);
    this.setState({
      data: this.shuffle(data),
      score: newScore,
      result: "You guessed correctly",
      topScore: Math.max(this.state.topScore, newScore)
    });
  };

  //function to handle a bad guess
  handleBadGuess = data => {
    this.setState({
      data: this.reset(data),
      score: 0,
      result: "Wrong! Click again!"
    });
  };
````

## Technologies Used
- Git - version control system to track changes to source code.
- GitHub - hosts repository that can be deployed to GitHub Pages.
- Javascript - allows dynamic interaction between user and computer data entry.
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- NODE.js - javascript run-time environment that can be run outside of browser.
- Heroku - A cloud platform that allows developers to build, run, and operate on the cloud 
- React - A javascript library for building user interfaces
- jQuery - A library used for server communication.
- HTML - Backbone of the site.
- CSS - For additional styling.


## Learning Points 
- Fisher-Yates Modern Shuffle method, which shuffles the character images in the data.JSON array by running a loop and swapping index values sarting with index 0 and last index. i.e. A random number is chosen between index 1 and index 10 and swapped positions
- Map method, applys a function on every element in an array

## Author
- Lex Santos - [GitHub](https://github.com/flexsant) | [LinkedIn](https://www.linkedin.com/in/lex-santos-673623194/)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
