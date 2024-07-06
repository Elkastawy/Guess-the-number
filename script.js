'use strict';

//Project: with DRY
let randomNumber,
  score = 20,
  hiScore = 0;
function generateRandomNumber() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
}
function wrongGuess() {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) displayMessage('You lost! 👎');
}
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
generateRandomNumber();

document.querySelector('.check').addEventListener('click', function () {
  if (score === 0) return; //exits function
  let guessedValue = Number(document.querySelector('.guess').value);

  //no input
  if (!guessedValue)
    //since number(null) = 0
    displayMessage('No number entered!🚫');
  else if (guessedValue > randomNumber) {
    displayMessage('Go lower!⬇');
    wrongGuess();
  } else if (guessedValue < randomNumber) {
    displayMessage('Go higher!⬆');
    wrongGuess();
    //winning
  } else if (guessedValue === randomNumber) {
    displayMessage('Correct number!!🎉');
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (score > hiScore) {
      hiScore = score;
      document.querySelector('.highscore').textContent = hiScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = null;
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = 20;
  generateRandomNumber();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
