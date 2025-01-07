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


const result = getComputerChoice();
console.log(result);