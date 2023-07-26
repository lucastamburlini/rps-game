const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const startButton = document.getElementById("startButton");
const gameSetup = document.getElementById("gameSetup");
const gameSection = document.getElementById("gameSection");

const instructions = document.getElementById("instructionsGame");
const containerUserScore = document.getElementById("userScore");
const containerComputerScore = document.getElementById("computerScore");
const containerResult = document.getElementById("result");
const restart = document.getElementById("restartButton");

let userScore = 0;
let computerScore = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  const playerName = document.getElementById("playerName").value;

  if (playerName.trim() === "") {
    alert("Please enter your name!");
    return;
  }

  gameSetup.style.display = "none";
  gameSection.style.display = "block";

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
  let containerChoiceComputer = document.getElementById("computerChoiceImg");
  containerChoiceComputer.innerHTML = choiceComputer;

  computerChoiceImg.src = `assest/${choiceComputer}.png`;

  if (choiceUser === choiceComputer) {
    containerResult.innerHTML = "Tie";
  } else if (
    (choiceUser === "rock" && choiceComputer === "scissors") ||
    (choiceUser === "paper" && choiceComputer === "rock") ||
    (choiceUser === "scissors" && choiceComputer === "paper")
  ) {
    winUser();
  } else {
    winComputer();
  }
}

winUser = () => {
  userScore++;
  containerUserScore.innerHTML = userScore;
  containerResult.innerHTML = "Win!";

  if (userScore === 5) {
    containerResult.innerHTML = "You won the game!";
    restartGame();
  }
};

winComputer = () => {
  computerScore++;
  containerComputerScore.innerHTML = computerScore;
  containerResult.innerHTML = "Lose!";
  if (computerScore === 5) {
    containerResult.innerHTML = "You lost the game.";
    restartGame();
  }
};

function restartGame() {
  userScore = 0;
  computerScore = 0;

  containerUserScore.innerHTML = userScore;
  containerComputerScore.innerHTML = computerScore;
}

restart.addEventListener("click", restartGame);
