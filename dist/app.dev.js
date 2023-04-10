"use strict";

var _this = void 0;

//Assign variables to 
var boxes = document.querySelectorAll(".box");
var restartButton = document.querySelector("#restart-button");
var winningCombinations = [[0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][(2, 4, 6)]]; //This line of code creates an array of 9 placeholders. An array of empty strings

var choice = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var running = false;

var startGame = function startGame() {
  boxes.forEach(function (box) {
    return box.addEventListener("click", handleClickOnBox);
  });
  restartButton.addEventListener("click,", handleRestart);
  running = true;
}; //Functions that will be needed
// const startingGame
//handle click function- creates a function that will access each index position in the hoice array


var handleClickOnBox = function handleClickOnBox() {
  var index = _this.dataset.index;

  if (choice[index] != "" || !running) {
    return;
  }
}; // const updateBox
// const swapPlayer
// const checkWinner


var handleRestart = function handleRestart() {
  choice = ["", "", "", "", "", "", "", ""];
  boxes.forEach(function (box) {
    return box.innerText = "";
  });
}; //Add an event listener