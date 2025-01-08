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
 humanScore = getHumanChoice ();
 computerScore = getComputerChoice ();

function playGame (){
  function playRound (humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanScore > computerChoice){
    console.log( `${humanScore} is winner over ${computerScore}` );
    humanScore++;
  } else if (computerChoice > humanScore ) {
    console.log( `${computerScore} is winner over ${humanScore}` );
    computerChoice++;
  }else{ console.log( `It's a draw` );  
  }
  }
  const gameResult = playGame ();
  alert( gameResult);
}

playGame ();




