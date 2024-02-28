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

let computerScore = 0,
  playerScore = 0;

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "Rock") {
        return "It is a tie!";
      } else if (computerSelection === "Paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
      } else {
        playerScore++;
        return "You win! Rock beats scissors!";
      }
      break;
    case "paper":
      if (computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats rock!";
      } else if (computerSelection === "Paper") {
        return "It is a tie!";
      } else {
        computerScore++;
        return "You lose! Scissors beats paper!";
      }
      break;
    case "scissors":
      if (computerSelection === "Rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
      } else if (computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats paper!";
      } else {
        return "It is a tie!";
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your selection:");
    let computerSelection = getComputerChoice();
    let message = playRound(playerSelection, computerSelection);
    console.log(
      `Current player score: ${playerScore}\nCurrent computer score: ${computerScore}`
    );
  }
}
