//Assign variables to 
const boxes = document.querySelectorAll(".box");
const restartButton = document.querySelector("#restart-button");
const winningCombinations = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];

//This line of code creates an array of 9 placeholders. An array of empty strings
let choice = ["", "", "", "", "", "", "", "", "",]
let currentPlayer = "X"
let running = false

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", handleClickOnBox))
    restartButton.addEventListener("click,", handleRestart)
    running = true;
}

//Functions that will be needed
// const startingGame
//handle click function- creates a function that will access each index position in the hoice array
const handleClickOnBox = () => {
    const index = this.dataset.index;
    if(choice[index]!="" || !running){
        return;    
    }
}


// const updateBox

// const swapPlayer

// const checkWinner

const handleRestart = () =>{
    choice = ["", "", "", "", "", "", "", "",];
    boxes.forEach(box => box.innerText = "");
}
    
//Add an event listener