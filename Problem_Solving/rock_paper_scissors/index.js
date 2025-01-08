let humanScore = 0;
let computerScore = 0;


function getHumanChoice () {
  let myPrompt= prompt("Enter a number between 0 and 1");

  if(myPrompt < 0.4){
    return "rock";
   } else if( myPrompt < 0.8){
      return "paper";
    } else {
      return "scissors";
     }
}

function getComputerChoice () {
 let randomnumber = Math.random()

 if(randomnumber < 0.4){
  return "rock";
 } else if(randomnumber < 0.8){
    return "paper";
  } else {
    return "scissors";
   }
 }
 
  function playRound (humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice > computerChoice){
    console.log( `${humanChoice} is winner over ${computerChoice}` );
    humanScore++;
  } else if (computerChoice > humanChoice ) {
    console.log( `${computerChoice} is winner over ${humanChoice}` );
    computerScore++;
  }else{ console.log( `It's a draw` );  
  }
  }
   
  function playGame (){
    let myUserChoice = getHumanChoice();
    let myComputerChoice = getComputerChoice ();

    playRound(myUserChoice,myComputerChoice);
    console.log(`Current Scores: You - ${humanScore}, Computer - ${computerScore}`);
  }


playGame();



//when back add comments to get more explanation
