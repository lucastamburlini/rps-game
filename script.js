const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

/* Event representing the player's choices */

rock.addEventListener("click", function () {
  playerChoice = "rock";
  playRound();
});

paper.addEventListener("click", function () {
  playerChoice = "paper";
  playRound();
});

scissors.addEventListener("click", function () {
  playerChoice = "scissors";
  playRound();
});

/* Function that represents the functioning of the game */