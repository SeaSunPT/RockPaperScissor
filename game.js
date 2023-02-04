const existingMoves = ["Rock", "Paper", "Scissor"]

let score;

const getComputerChoice = () => {
  return existingMoves[Math.floor(Math.random() * existingMoves.length)]
};

const game = () => {
  score = 0;
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Choose your move"), getComputerChoice());
    console.log(score);
 }
 if(score < 0)
 {
  console.log("You lose!");
 }
 else if(score > 0)
 {
  console.log("You win!");
 }
 else console.log("It's a draw!");

}

const playRound = (playerSelection) => {
  const choice1 = playerSelection.toUpperCase();
  const choice2 = getComputerChoice().toUpperCase();
  if (choice1 === choice2){
    return console.log("Draw");
  }
  else if (choice1 === "ROCK" && choice2 === "SCISSOR"){
    score += 1;
    return console.log(`You Win! ${choice1} beats ${choice2}`);
  }
  else if (choice1 === "PAPER" && choice2 === "SCISSOR"){
    score -= 1;
    return console.log(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "ROCK" && choice2 === "PAPER"){
    score -= 1;
    return console.log(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "PAPER" && choice2 === "ROCK"){
    score += 1;
    return console.log(`You Win! ${choice1} beats ${choice2}`);
  }
  else if (choice1 === "SCISSOR" && choice2 === "ROCK"){
    score -= 1;
    return console.log(`You Lose! ${choice2} beats ${choice1}`);
  }
  else if (choice1 === "SCISSOR" && choice2 === "PAPER"){
    score += 1;
    return console.log(`You Win! ${choice1} beats ${choice2}`);
  }
}

game();