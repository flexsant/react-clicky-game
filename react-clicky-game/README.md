## React-Clicky-Game
[Site](https://flexsant.github.io/react-clicky-game-2/)
## Summary
Begin by clicking on any of the Simpsons characters and make sure to click a different character each time to see the highest score you can achieve.

## Visual Aids
[Landingpage]()

## User Guides
- Friend-finder will ask the user 10 questions with 5 varying degrees of approvable or disapproval.
- Once the user finishes the questionare friend-finder will match them with one of ten friendly candidates.


## Code Snippet
```Javascript
// posting api/friends in api/routes
app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;
    var totalDifference;

    console.log(newFriend);

    var match = {
        name: "",
        photo: "",
        difference: 999
    }

    for (var i = 0; i < friends.length; i++) {
        currentFriend = friends[i];
        currentFriendScores = friends[i].scores;

        totalDifference = 0;

        for (var j = 0; j < currentFriendScores.length; j++) {
            var difference = 0;
            //the current score we are looping over of the friend from the json
            currentFriendScore = currentFriendScores[j];
            //the same index of the scores from the newFriend
            newFriendScore = newFriendScores[j];
            //figure out the difference
            difference = Math.abs(parseInt(currentFriendScore) - parseInt(newFriendScore));
            //figure out the difference and add it to the totalDifference
            totalDifference += difference
        }

        if (totalDifference <= match.difference) {
            match.name = currentFriend.name;
            match.photo = currentFriend.photo;
            match.difference = totalDifference;
        }
    }
```
````Javascript
 //on click for form submit

     $("#submit").click(function (event) {
         event.preventDefault()
         var name = $("#name").val().trim();
         var photo = $("#photo").val().trim();
         var userAnswers = [
             $("input[name='q1']:checked").val().trim(),
             $("input[name='q2']:checked").val().trim(),
             $("input[name='q3']:checked").val().trim(),
             $("input[name='q4']:checked").val().trim(),
             $("input[name='q5']:checked").val().trim(),
             $("input[name='q6']:checked").val().trim(),
             $("input[name='q7']:checked").val().trim(),
             $("input[name='q8']:checked").val().trim(),
             $("input[name='q9']:checked").val().trim(),
             $("input[name='q10']:checked").val().trim(),
         ]
         console.log(userAnswers)

         if (userAnswers.length === 10) {
             var newFriend = {
                 name: name,
                 photo: photo,
                 scores: userAnswers
             }
             console.log("newFriend: ", newFriend);

             $.post("/api/friends", newFriend, function (match) {
                 alert(match.name);
             })
         }
     });
````


## Technologies Used
- Git - version control system to track changes to source code.
- GitHub - hosts repository that can be deployed to GitHub Pages.
- Javascript - allows dynamic interaction between user and computer data entry.
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- NODE.js - javascript run-time environment that can be run outside of browser.
- Inquirer - command line user interfaces.
- Sequelize - Capture all the data and store into a table.
- Express - A node package for server hosting.
- Node.js - Backend server.
- jQuery - A library used for server communication.
- HTML - Backbone of the site.
- CSS - For additional styling.


## Learning Points 
- Deploying Heroku was unsuccesful but will be a future feature
- GET routes displayed on JSON
- POST routes to handle to survey results
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
