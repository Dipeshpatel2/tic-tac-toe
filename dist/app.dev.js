"use strict";

//Assign variables to
var boxes = document.querySelectorAll(".box");
var restartButton = document.querySelector("#restart-button");
var winningSequence = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //This line of code creates an array of 9 placeholders. An array of empty strings

var choice = [""] * 9;
var currentPlayer = "X";
var running = false;
console.log(boxes); //Functions that will be needed
//handle click function- creates a function that will access each index position in the choice array

var handleClickOnBox = function handleClickOnBox(event) {
  if (event.target.innerText == "") {
    event.target.innerText = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
}; // const startingGame


var startGame = function startGame() {
  boxes.forEach(function (box) {
    return box.addEventListener("click", handleClickOnBox);
  });
  restartButton.addEventListener("click,", handleRestart); //running = true;
}; //const updateBox
// const swapPlayer
// const checkWinner


var handleRestart = function handleRestart() {
  choice = ["", "", "", "", "", "", "", ""];
  boxes.forEach(function (box) {
    return event.target.innerText = "";
  });
}; //Add event listeners


startGame();