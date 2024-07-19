// rules
// player vs the computer
//
// one player at a time
// then the next player goes
// one a player has

// class Player {
//     constructor(name){
//         this.name = name;
//     }
// }

// class humanPlayer extends Player {
//     constructor(name, x) {
//         super(name);
//         this.x = x;
//     }
// }

// class computerPlayer extends Player {
//     constructor(name, o) {
//         super(name);
//         this.o = o;
//     }

//     randomChoice() {
//         const choice
//     }
// }

// class Game {
//     constructor(player, computer) {
//         this.player = player
//         this.computer = computer
//     }
// const playerChoice = document.querySelectorAll(".pos")
// addEventListener.playerChoice("click", playerMove)
// const newIndex = 0
//

// const winning = {
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// };

// Create a querySelector that targets the board and all its elements
document.addEventListener("DOMContentLoaded", function () {
  const position = document.querySelectorAll(".pos");

  position.forEach((position) => {
    position.addEventListener("click", handleMove);
  });
  function handleMove(event) {
    inputText(event.target);
  }
  function inputText(pos) {
    pos.textContent = "x";
  }
});

// function whenClicked(e) {
//     const index = e.target.dataset.index;

//     if (board[index]) {
//         splice(index)
//     }
// }

// function playerMove(array){
//     array[i] =
//     for (let i = 0 ; i < array.length; i++){
//        if ()
//     }
//     if (playerChoice )
// }
// outcome(){
//     const playersChoice =
// }

// // }

// function Game(positons){

// let player one randomly select a position in the array to start
// once that position in the array has been chosen, remove it
// then let the computer choose a random position in the array
// then repeat this until either the player or the computer completes the following rules
// if they have position in any of these orders, return who won, if none of the
// these have been achieve, return, it was a draw
