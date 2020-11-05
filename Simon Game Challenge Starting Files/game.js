var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); // 0-3

  var randomChosenColour = buttonColours[randomNumber];

  // add randowmChosenColour into arrays
  gamePattern.push(randomChosenColour);
}
