function getComputerChoice() {
  let randomNum = Math.trunc(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "Rock") {
        return "It is a tie!";
      } else if (computerSelection === "Paper") {
        return "You lose! Paper beats rock!";
      } else {
        return "You win! Rock beats scissors!";
      }
      break;
    case "paper":
      if (computerSelection === "Rock") {
        return "You win! Paper beats rock!";
      } else if (computerSelection === "Paper") {
        return "It is a tie!";
      } else {
        return "You lose! Scissors beats paper!";
      }
      break;
    case "scissors":
      if (computerSelection === "Rock") {
        return "You lose! Rock beats scissors!";
      } else if (computerSelection === "Paper") {
        return "You win! Scissors beats paper!";
      } else {
        return "It is a tie!";
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {}
}
