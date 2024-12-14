let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){return Math.floor(Math.random() * 10);} //number between 0 and 9.
function compareGuesses(hGuess, cGuess, target){
    let hDiff = Math.abs(hGuess - target); // human difference with target
    let cDiff = Math.abs(cGuess - target); // computer difference with target
    return hDiff > cDiff? false: true;
}
function updateScore (str) {str === 'human' ? humanScore ++: computerScore++;} //updates score
function advanceRound() {currentRoundNumber ++;} //updates round

/* Codecademy solution:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
const advanceRound = () => currentRoundNumber++;*/