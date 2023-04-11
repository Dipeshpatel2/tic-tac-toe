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
let choice = [""] * 9
let currentPlayer = "X";
let running = false;

console.log(boxes)
//Functions that will be needed

//handle click function- creates a function that will access each index position in the choice array
const handleClickOnBox = (event) => {
  if(event.target.innerText == ""){
    event.target.innerText = currentPlayer
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
  }
  
}

// const startingGame
const startGame = () => {
    boxes.forEach((box) => box.addEventListener("click", handleClickOnBox));
    restartButton.addEventListener("click,", handleRestart);
    //running = true;
  };
//const updateBox

// const swapPlayer

// const checkWinner

const handleRestart = () =>{
    choice = ["", "", "", "", "", "", "", "",];
    boxes.forEach(box => event.target.innerText = "");
}
//Add event listeners
startGame()