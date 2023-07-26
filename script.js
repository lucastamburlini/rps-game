const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("scissors");

let containerUserScore = document.getElementById("userScore");
let containerComputerScore = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

function playGame(e) {
  let choice = ["rock", "paper", "scissors"];
  let choiceComputer = choice[Math.floor(Math.random() * 3)];
  let choiceUser = e.currentTarget.id;

  if (choiceUser === choiceComputer) {
    console.log("Empate");
  } else if (
    (choiceUser === "rock" && choiceComputer === "scissors") ||
    (choiceUser === "papel" && choiceComputer === "rock") ||
    (choiceUser === "scissors" && choiceComputer === "papel")
  ) {
    winUser();
  } else {
    winComputer();
  }
}

winUser = () => {
  userScore++;
  console.log("User: " + userScore);
};

winComputer = () => {
  computerScore++;
  console.log("Computer: " + computerScore);
};
