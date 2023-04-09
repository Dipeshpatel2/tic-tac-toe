"use strict";

//Assign variables to 
var restartButton = document.querySelector("#button");
var boxes = document.querySelectorAll(".box");
var winningCombinations = [[0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][(2, 4, 6)]]; //This line of code creates an array of 9 placeholders. An array of empty strings

var choice = ["", "", "", "", "", "", "", "", ""];