/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const gameFunctionality = () => {
  const boxes = document.querySelectorAll('[data-number]');
  const winningCombination = [
    ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['7', '5', '3'],
  ];
  const p1combination = [];
  const p2combination = [];

  const announcer = (winner) => {
    if (winner === 'player1') {
      console.log('player1 wins!');
    } else if (winner === 'player2') {
      console.log('player2 wins!');
    }
  };
  const winner = () => {
    if (winningCombination.some((combination) => combination.every((number) => p1combination.includes(number)))) {
      announcer('player1');
    } else if (winningCombination.some((combination) => combination.every((number) => p2combination.includes(number)))) {
      announcer('player2');
    }
  };

  const gameOn = () => {
    boxes.forEach((element) => {
      element.addEventListener('click', () => {
        if (p1combination.length > p2combination.length) {
          p2combination.push(element.dataset.number);
          console.log(p2combination);
          winner();
        } else {
          p1combination.push(element.dataset.number);
          console.log(p1combination);
          winner();
        }
      });
    });
  };

  return {
    gameOn,
  };
};
const gamematch = gameFunctionality();
gamematch.gameOn();
