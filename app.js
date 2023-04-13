//Assign variables to
const boxes = document.querySelectorAll(".box");
const restartButton = document.querySelector("#restart-button");

const xMoves = [];
const oMoves = [];
const winningSequence = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//This line of code creates an array of 9 placeholders. An array of empty strings
let choice = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

//Functions that will be needed

// const startingGame
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", handleClickOnBox));
  restartButton.addEventListener("click", handleRestart);
  running = true;
};

//handle click function- creates a function that will access each index position in the choice array
const handleClickOnBox = (event) => {
  const id = event.target.id;

  if (!choice[id] && running) {
    choice[id] = currentPlayer;
    //Updating the box with X first when the box has been clicked
    event.target.innerText = currentPlayer;
    //Changing the player from X to O, once X has been played and updating the box
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
  checkWinner(event);
  checkDraw()
};

// const checkWinner

const checkWinner = () => {
  // Loop through the winning sequences to see if any of them are true
  for (let i = 0; i < winningSequence.length; i++) {
    const sequence = winningSequence[i];
    const [a, b, c] = sequence;
    // Check if the choice array has X or O in each position of the winning sequence
    if (choice[a] && choice[a] === choice[b] && choice[a] === choice[c]) {
      // If X wins, display X in a message
      if (choice[a] === "X") {
        alert("X is the winner!");
      }
      // If O wins, display O in a message
      else {
        alert("O is the winner!");
      }
      // End the game
      running = false;
      break;
    }
  }
};

const checkDraw = () => {
  if (!choice.includes("")) {
    alert("It's a draw!");
    running = false;
  }
};

//Restart game function

const handleRestart = () => {
  choice = ["", "", "", "", "", "", "", "", ""];

  boxes.forEach((box) => {
    box.innerText = "";
  });

  currentPlayer = "X";
  running = true;
};

startGame();
