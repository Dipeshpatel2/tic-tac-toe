//Assign variables to
const boxes = document.querySelectorAll(".box");
const restartButton = document.querySelector("#restart-button");

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
let choice = [""] * 9;
let currentPlayer = "X";
let running = false;

//Functions that will be needed

// const startingGame
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", handleClickOnBox));
  restartButton.addEventListener("click", handleRestart);
  //running = true;
};


//handle click function- creates a function that will access each index position in the choice array
const handleClickOnBox = (event) => {
  const id = event.target.id;

  if (!choice[id]) {
    choice[id] = currentPlayer;
    event.target.innerText = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
};
// Below code working and done with help of RH
//   if(event.target.innerText == ""){
//     event.target.innerText = currentPlayer
//     currentPlayer = (currentPlayer == "X") ? "O" : "X"
//   }

// }
//const updateBox
// const swapPlayer
// const checkWinner

//Restart game function

const handleRestart = () => {
  choice = choice = [""] * 9;

  boxes.forEach((box) => {
    box.innerText = "";
  });

  currentPlayer = "X";
};

startGame();
