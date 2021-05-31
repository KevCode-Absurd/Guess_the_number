'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing!🧐');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   When there is no input
  if (!guess) {
    console.log(displayMessage('No Number Selected!💢'));

    // When player wins the Game
  } else if (guess === secretNumber) {
    console.log(displayMessage('You have found the correct number!🎆'));
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#20BF55';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = highscore;
    }
    // When player is close to the secret number
  } else if (guess === secretNumber - 1 || guess == secretNumber + 1) {
    if (score > 1) {
      displayMessage('Close!🤩');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!😪';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DA2C38';
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!🔺' : 'Too Low!🔺');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You Lost!😪');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#DA2C38';
  }
});
