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

const playRound = () => {
  const choices = ["rock", "paper", "scissers"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win this round!");
    playerScore++;
  } else {
    console.log("You lose this round!");
    computerScore++;
  }
};
