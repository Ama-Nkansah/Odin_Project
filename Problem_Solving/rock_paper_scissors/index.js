//initializing the score(as in 1-0) variables
let humanScore = 0;
let computerScore = 0;

//a function to get the user input by prompt and use the input to generate whether it is rock,paper or scissors.
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

//a function to generate the computer's number randomly and check whether it is rock,paper or scissors.
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
 
 //
  function playRound (humanChoice,computerChoice){
    //it changes all the args to same case to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    //comparing of args
    if (humanChoice > computerChoice){
    console.log( `${humanChoice} is winner over ${computerChoice}` );
    humanScore++;
  } else if (computerChoice > humanChoice ) {
    console.log( `${computerChoice} is winner over ${humanChoice}` );
    computerScore++;
  }else{ console.log( `It's a draw` );  
  }
  }
  //
   
  function playGame (){
    let myUserChoice = getHumanChoice();
    let myComputerChoice = getComputerChoice ();

    playRound(myUserChoice,myComputerChoice);
    console.log(`Current Scores: You - ${humanScore}, Computer - ${computerScore}`);
  }


playGame();



//when back add comments to get more explanation
