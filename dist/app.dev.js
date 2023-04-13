"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Assign variables to
var boxes = document.querySelectorAll(".box");
var restartButton = document.querySelector("#restart-button");
var winningSequence = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //This line of code creates an array of 9 placeholders. An array of empty strings

var choice = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var running = false; //Functions that will be needed
// const startingGame

var startGame = function startGame() {
  boxes.forEach(function (box) {
    return box.addEventListener("click", handleClickOnBox);
  });
  restartButton.addEventListener("click", handleRestart);
  running = true;
}; //handle click function- creates a function that will access each index position in the choice array


var handleClickOnBox = function handleClickOnBox(event) {
  var id = event.target.id;

  if (!choice[id] && running) {
    choice[id] = currentPlayer; //Updating the box with X first when the box has been clicked

    event.target.innerText = currentPlayer; //Changing the player from X to O, once X has been played and updating the box

    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }

  checkWinner(event);
  checkDraw();
}; // const checkWinner


var checkWinner = function checkWinner() {
  // Loop through the winning sequences to see if any of them are true
  for (var i = 0; i < winningSequence.length; i++) {
    var sequence = winningSequence[i];

    var _sequence = _slicedToArray(sequence, 3),
        a = _sequence[0],
        b = _sequence[1],
        c = _sequence[2]; // Check if the choice array has X or O in each position of the winning sequence


    if (choice[a] && choice[a] === choice[b] && choice[a] === choice[c]) {
      if (choice[a] === "X") {
        alert("X is the winner!");
      } else {
        alert("O is the winner!");
      } // End the game


      running = false;
      break;
    }
  }
}; //check if draw


var checkDraw = function checkDraw() {
  if (!choice.includes("")) {
    alert("It's a draw!");
    running = false;
  }
}; //Restart game function


var handleRestart = function handleRestart() {
  choice = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach(function (box) {
    box.innerText = "";
  });
  currentPlayer = "X";
  running = true;
};

startGame();