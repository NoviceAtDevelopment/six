let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
 return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess,computerGuess,targetNumber){
  if(humanGuess > (computerGuess + computerScore) || humanGuess===(computerGuess + computerScore)){
   return true;
  }else {
    return false;
  }
}
function updateScore(winner){
  if (winner==="human"){
   humanScore ++;  
  }else if(winner==="computer"){
    computerScore ++;    
  }
}

function advanceRound(){
  currentRoundNumber++;
  }



