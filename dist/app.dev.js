"use strict";

//Assign variables to 
var boxes = Array.from(document.querySelectorAll(".box"));
var restartButton = document.querySelector("#restart-button");
var boxClicked = document.querySelectorAll(".box");
var winningCombinations = [[0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][(2, 4, 6)]]; //This line of code creates an array of 9 placeholders. An array of empty strings

var choice = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X"; //Functions that will be needed
// const startingGame
// const handleClickOnBox
// const updateBox
// const swapPlayer
// const checkWinner

var handleRestart = function handleRestart() {
  choice = ["", "", "", "", "", "", "", ""];
  boxClicked.forEach(function (box) {
    return box.innerText = "";
  });
}; //Add an event listener


restartButton.addEventListener("click,", handleRestart);
boxClicked.addEventListener("click", handleClickOnBox);