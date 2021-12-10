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
  
  
   if (playerSelection === 'rock' && computerSelection === 'scissors') {
    
    
    return("You win this round! Rock beats scissors. Let's try again!");
    
   
    
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {

    return("You win this round! Paper beats Rock. Let's try again!");

  }
  
   else if (playerSelection === 'scissors' && computerSelection === 'paper') {
   
    return ("You win this round! Scissors beats Paper. Let's try again!");

  } 
  
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    
   
    return("You lose this round, paper beats Rock. Let's try again!");

  } 
  
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {

    
    return ("You lose this round. Scissors beats Paper.Let's try again!");

  } 
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {

    return  ("You lose this round! Rock beats Scissors.Let's try again!");

  } else { 
  
    return("It's a tie!" +  computerSelection);
    
  }
  
}

function game(){
  for (round=1; round<=5; round++){
     
   selectionGame = playRound();
   console.log(selectionGame)
    
    
    
  }
  
}






