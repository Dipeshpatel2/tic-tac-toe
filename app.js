//Assign variables to 

const restartButton = document.querySelector("#button");
const boxes = document.querySelectorAll(".box");
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

//Functions that will be needed
const startingGame{

}

const handleClickOnBox{

}

const updateBox{

}

const swapPlayer{

}

const checkWinner{

}

const handleRestart = () =>{
    choice = ["", "", "", "", "", "", "", "",];
    boxes.forEach(box => box.innerText = "");
}
    

//Add an event listener

restartButton.addEventListener("click,", handleRestart)