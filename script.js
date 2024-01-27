let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreComputer");
const result = document.querySelector(".result");
const reset = document.querySelector("#reset");
const whoWin = document.querySelector("#whoWin");

btnRock.addEventListener("click", () => handleClick("rock"));
btnPaper.addEventListener("click", () => handleClick("paper"));
btnScissors.addEventListener("click", () => handleClick("scissors"));

function getComputerChoice() {
  let random = Math.round(Math.random() * 2);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  let message = "";
  if (playerSelection === computerSelection) {
    message = `draw, p: ${playerSelection}, c: ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    message = `You win! p: ${playerSelection} beats c: ${computerSelection}`;
    // playerScore++;
    scorePlayer.textContent = `Player : ${(playerScore += 1)}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    message = `You lose! c: ${computerSelection} beats p: ${playerSelection}`;
    // computerScore++;
    scoreComputer.textContent = `Computer : ${(computerScore += 1)}`;
  }

  if (playerScore === 5) {
    whoWin.textContent = "Player Win";
  }
  if (computerScore === 5) {
    whoWin.textContent = "Computer Win";
  }

  return (result.textContent = message);
}

function handleClick(playerSelection) {
  if (isGameOver()) {
    return;
  }
  playRound(playerSelection, getComputerChoice());
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

reset.addEventListener("click", () => {
  result.textContent = "PLAY AGAIN!";
  scorePlayer.textContent = "Player : 0";
  scoreComputer.textContent = "Computer : 0";
  playerScore = 0;
  computerScore = 0;
  whoWin.textContent = "CHOOSE YOUR ITEM!";
});
