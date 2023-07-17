'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!!!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please guess a number 😡';
  }
  // when guess is too high
  else if (guess > randomNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'The number is too high';
      score = score - 1;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!!!';
    }
  }
  //When guess is too low
  else if (guess < randomNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'The number is too low';
      score -= 1;
      document.querySelector('body').style.backgroundColor = '#eb0707';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!!!';
    }
  }
  //When the player wins
  else {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
//Applying functionality to again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Applying reset
document.querySelector('.reset').addEventListener('click', function () {
  location.reload();
});
