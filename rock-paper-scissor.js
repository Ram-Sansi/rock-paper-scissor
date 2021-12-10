// rock paper scissors project
console.log("This is a Rock paper scissor game");

const computerArray = ["rock", "paper", "scissors"];

function computerPlay(){
    return computerArray[Math.floor(Math.random() * computerArray.length)];
    
}

function playRound(playerSelection, computerSelection) {
  playerSelection = window.prompt( "Select either Rock, Paper, or Scissors" ).toLowerCase();
  
  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
 
  if (playerSelection === 'rock' && computerSelection === 'scissors'||
      playerSelection === 'paper' && computerSelection === 'rock'||
      playerSelection === 'scissors' && computerSelection === 'paper'){
      return(`You win this round! ${playerSelection} beats ${computerSelection} Let's try again!`);
}

  else if(playerSelection === 'rock' && computerSelection === 'paper'||
          playerSelection === 'paper' && computerSelection === 'scissors'||
          playerSelection === 'scissors' && computerSelection === 'rock') {
          return (`You lose this round! ${computerSelection} beats ${playerSelection} Let's try again!`);
}

  else{
          return("It's a tie! Let's try again!");
}
  
}

function game(){
  for (round=1; round<=5; round++){
     
   selectionGame = playRound();
   console.log(selectionGame)
    
   }
  
}






