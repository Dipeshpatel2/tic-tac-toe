# tic-tac-toe

This is a project to create a Tic Tic Toe game.  The purpose is to make it functional so that it declares a winner or draw whether you play an X or O.  If no winner is found then it declares a 'Draw'.  The games starts with X and then alternates by clicking on the boxes which displays it with them.  The game ends when a winner is found or all the boxes have been played.  At the bottom I included a Restart button which clears the board to start again.

To make this project I used a nested array to find all the winning sequences and then used a for loop to iterate over all the 

startGame
This functions starts the game off by adding an eventListener to the someone clicking on the box and Restart button.

handleClickOnBox
Takes the event as a parameter and gets the id of the box.  When the box is clicked it starts with an X and assigns it to an empty slot in the choice array.
It also initiates the checkWinner and checkDraw functions.

checkWinner
The checkWinner function loops through the winningSequence.  Inside the loop is a new variable called sequence which holds constants abc.  The choice array is checked against the sequence array to see if they match X and O at the same places as abc.  If they match, a winner alert is given to either X or O.

checkDraw
This function checks that all the empty strings in the choice array are filled and that no empty string is left, thus alerting a draw.

handleRestart
Resets all the striing in the choice array back to empty strings.
Resets all the boxes to be empty and reset currentPlayer to return to X.