var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  // console.log(userClickedPattern);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); // 0-3

  var randomChosenColour = buttonColours[randomNumber];

  // add randowmChosenColour into arrays
  gamePattern.push(randomChosenColour);

  // use jquey to animate flash to the button
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  // play sound for button selected
  var audio = new Audio("sounds/" + randomChosenColour  + ".mp3");
  audio.play();
}
