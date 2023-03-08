const existingMoves = ["Rock", "Paper", "Scissor"]

let score = 0;
let rounds = 0;

const getComputerChoice = () => {
  return existingMoves[Math.floor(Math.random() * existingMoves.length)]
};

const game = () => {
  score = 0;
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Choose your move"), getComputerChoice());
    console.log(score);
  }
  if (score < 0) {
    console.log("You lose!");
  }
  else if (score > 0) {
    console.log("You win!");
  }
  else console.log("It's a draw!");

}

const playRound = (playerSelection) => {
  const choice1 = playerSelection.toUpperCase();
  const choice2 = getComputerChoice().toUpperCase();
  rounds += 1;
  if (choice1 === choice2) {
    //return console.log("Draw");
    return createElementWithResult("Draw");
  }
  else if (choice1 === "ROCK" && choice2 === "SCISSOR") {
    score += 1;
    //return <p>You Win! ${choice1} beats ${choice2}</p>;
    return createElementWithResult(`You Win! ${choice1} beats ${choice2}`);
  }
  else if (choice1 === "PAPER" && choice2 === "SCISSOR") {
    score -= 1;
    //return console.log(`You Lose! ${choice2} beats ${choice1}`);
    return createElementWithResult(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "ROCK" && choice2 === "PAPER") {
    score -= 1;
    //return console.log(`You Lose! ${choice2} beats ${choice1}`);
    return createElementWithResult(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "PAPER" && choice2 === "ROCK") {
    score += 1;
    //return console.log(`You Win! ${choice1} beats ${choice2}`);
    return createElementWithResult(`You Win! ${choice1} beats ${choice2}`);
  }
  else if (choice1 === "SCISSOR" && choice2 === "ROCK") {
    score -= 1;
    //return console.log(`You Lose! ${choice2} beats ${choice1}`);
    return createElementWithResult(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "SCISSOR" && choice2 === "PAPER") {
    score += 1;
    //return console.log(`You Win! ${choice1} beats ${choice2}`);
    return createElementWithResult(`You Win! ${choice1} beats ${choice2}`);
  }
}

const createElementWithResult = (result) => {

  const resultPlaceHolder = document.getElementById("round-result");
  let resultText;
  let elementExists = document.getElementById("last-round-result");

  if (elementExists === null) {
    resultText = document.createElement("p");
    resultText.setAttribute("id", "last-round-result");
    resultPlaceHolder.appendChild(resultText);
  }
  else {
    resultText = document.getElementById("last-round-result");
  }

  resultText.textContent = result;

  const matchScore = document.getElementById("match-score");
  let scoreboardExists = document.getElementById("scoreboard");
  let scoreboardText;

  if (scoreboardExists === null) {
    scoreboardText = document.createElement("p");
    scoreboardText.setAttribute("id", "scoreboard");
    matchScore.appendChild(scoreboardText);
  }
  else {
    scoreboardText = document.getElementById("scoreboard");
  }

  scoreboardText.textContent = score;

  console.log(rounds);

  if (rounds == 5) {
    const winner = document.getElementById("winner");
    let winnerExists = document.getElementById("winner-text");
    let winnerText;

    if (winnerExists === null) {
      winnerText = document.createElement("p");
      winnerText.setAttribute("id", "winner-text");
      winner.appendChild(winnerText);
    }
    else {
      winnerText = document.getElementById("winner-text");
    }

    if (score > 0) {
      winnerText.textContent = "Player wins!";
    }
    else if (score === 0) {
      winnerText.textContent = "Draw!";
    }
    else winnerText.textContent = "Computer wins!";
  }
}

//game();

const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", function () {
  // Call function in game.js file
  let result = playRound("rock");
  if (result != null) {
    document.getElementById("match-result").appendChild(result);
    document.getElementById("scoreboard").textContent = score;
  }
});

const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", function () {
  // Call function in game.js file
  let result = playRound("paper");
  if (result != null) {
    document.getElementById("match-result").appendChild(result);
    document.getElementById("scoreboard").textContent = score;
  }
});

const scissorButton = document.getElementById("scissor-button");
scissorButton.addEventListener("click", function () {
  // Call function in game.js file
  let result = playRound("scissor");
  if (result != null) {
    document.getElementById("match-result").appendChild(result);
    document.getElementById("scoreboard").textContent = score;
  }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  rounds = 0;
  score = 0;
});