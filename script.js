const computer = getComputerChoice();

console.log(game());

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choice[random];
}

function playGround(playerSelection, computerSelection) {
  let message;
  if (playerSelection === "rock" && computerSelection === "paper") {
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    message = `Draw, ${playerSelection} and ${computerSelection}`;
  } else {
    message = `Your input '${playerSelection}' is wrong`;
  }

  return message;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const player = prompt("rock, paper, or scissors? ").toLowerCase();
    alert(playGround(player, computer));
  }
}
