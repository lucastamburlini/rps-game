const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("scissors");

const startButton = document.getElementById("startButton");
const gameSetup = document.getElementById("gameSetup");
const gameSection = document.getElementById("gameSection");

const instructions = document.getElementById("instructionsGame");
const containerUserScore = document.getElementById("userScore");
const containerComputerScore = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  const playerName = document.getElementById("playerName").value;

  if (playerName.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // Hide the game setup and display the game section
  gameSetup.style.display = "none";
  gameSection.style.display = "block";

  // You can do additional setup tasks here if needed.

  // Now that the game has started, add event listeners to the buttons
  rockBtn.addEventListener("click", playGame);
  paperBtn.addEventListener("click", playGame);
  scissorsBtn.addEventListener("click", playGame);

  const namePlayer = document.getElementById("containerUser");
  namePlayer.innerHTML = playerName;
}

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
  containerUserScore.innerHTML = userScore;
};

winComputer = () => {
  computerScore++;
  containerComputerScore.innerHTML = computerScore;
};
