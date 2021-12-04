// rock-paper-scissor project

console.log("This is a Rock paper scissor game");

const computerArray = ["rock", "paper", "scissors"];

function computerPlay(){
    return computerArray[Math.floor(Math.random() * computerArray.length)];
    
}




function playRound(playerSelection, computerSelection) {
  playerSelection = window.prompt( "Select either Rock, Paper, or Scissors" ).toLowerCase();
  computerSelection = computerPlay()
  console.log(playerSelection)
  console.log(computerSelection)
  computerScore = 0;
  let playerScore = 0;

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore+=1;
    return (`You win this round! Rock beats Scissors. Your score ${playerScore} Let's try again!`);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore+=1;
    console.log(`You win this round! Paper beats Rock. Your score is ${playerScore} Let's try again!`);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore+=1;
    console.log(`You win this round! Scissors beats Paper. Your score is ${playerScore} Let's try again!`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore+1;
    console.log(`You lose this round, paper beats Rock. Your score is ${computerScore} Let's try again!`);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore+=1;
    console.log(`You lose this round. Scissors beats Paper. Your score is ${computerScore} Let's try again!`);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore+=1;
      console.log(`You lose this round! Rock beats Scissors. Your score is ${computerScore} Let's try again!`);
  } else { 
    console.log(`It's a tie!`);
  }

}
    


function game(){
  for (let i=1; i<=5; i++)
  playRound(i);
  
  
    // console.log(`Your score is ${playerScore}.`);
  // return computerScore;
  
  
  
}

// if the computer wins, +1 to its score. if the player wins, add +1 to the score. 
// compare score of both computer and player. If playerScore > computerScore, player wins
// else computer wins or player lose


// declare a variable at each possible match
// if its a win add +1 and if its a lose +0 or just do nothing
// at the loop add all the variable values together and return the results
