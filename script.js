let randomNumber = parseInt(Math.random()*100+1);
const submitButton = document.querySelector('#submit-guess');
const restartButton = document.querySelector("#restart")
const previousGuesses = document.querySelector('#guesses')
const numberGuess = document.querySelector('#guess-field')
const remainingGuesses = document.querySelector('#guesses-remaining');
const message = document.getElementById("message")

let totalGuesses;
let guessedNumbers;

function init() {
  totalGuesses = 10;
  guessedNumbers = []
  randomNumber = parseInt(Math.random()*100+1);

  console.log(randomNumber)

  previousGuesses.innerHTML = "Not started yet";
  remainingGuesses.innerHTML = totalGuesses;
  restartButton.style.display = "none";
  numberGuess.value = "";
  message.innerHTML = "";
}

init();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(!numberGuess.value) {
    return;
  }
  if(totalGuesses > 0) {
    if(numberGuess.value == randomNumber) {
      message.innerHTML = "You have guessed it right";
      restartButton.style.display = "block";
    } else {
      totalGuesses--;
      guessedNumbers.push(numberGuess.value);
  
      numberGuess.value = "";
      previousGuesses.innerHTML = guessedNumbers
      remainingGuesses.innerHTML = totalGuesses;
    }
  } else {
    message.innerHTML = "You have ued all your chances, Please restart to continue!";
    restartButton.style.display = "block";
  }
});

restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  init();
})
