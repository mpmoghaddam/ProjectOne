const readlineSync = require("readline-sync");

let countp1 = 0;
let countp2 = 0;
let numberOfPlays = 0;

const startGame = () => {
  console.log(`curl http://localhost:4000/startGame `)
}

const chooseNumberOfGame = (numberOfPlaysInput) => {
  numberOfPlays = numberOfPlaysInput;
  if (numberOfPlaysInput % 2 === 0 || numberOfPlaysInput <= 1) {

    return `Please enter an odd number and greater than 1.`;

  } else {
    return `you want to play ${numberOfPlays} times curl http://localhost:4000/player1Selection?selection1={selection1}`;
  }
}

const player1Choice = (player1Selection, player1) => {
  if (player1Selection !== "rock" && player1Selection !== "Rock" && player1Selection !== "paper" && player1Selection !== "Paper" &&
    player1Selection !== "scissors" && player1Selection !== "Scissors") {
    return `${player1},you chose ${player1Selection}. Please enter the right selection from rock, paper and scissors. Please select again curl http://localhost:4000/player1Selection?selection1={selection1} `
  } else {
    return player1Selection
  }
}

const player2Choice = (player2Selection, player2) => {
  if (player2Selection !== "rock" && player2Selection !== "Rock" && player2Selection !== "paper" && player2Selection !== "Paper" &&
    player2Selection !== "scissors" && player2Selection !== "Scissors") {
    return `${player2}, you chose ${player2Selection}. Please enter the right selection from rock, paper and scissors. Please select again curl http://localhost:4000/player2Selection?selection2={selection2} `
  } else {
    return player2Selection
  }
}

const getCountP1 = () => {
  return countp1;
}

const getCountP2 = () => {
  return countp2;
}

const getNumberOfPlays = () => {
  return numberOfPlays;
}

const checkIfGameOver = (countp1, countp2, numberOfPlays, player1, player2) => {
  if (countp1 >= ((numberOfPlays - 1) / 2) + 1 || countp2 >= ((numberOfPlays - 1) / 2) + 1) {
    let player1Name = player1;
    let player2Name = player2;
    return ` The game is over. ${player1Name} won ${countp1} time(s), ${player2Name} won ${countp2} time(s) out of ${countp1 + countp2} total plays.`
  } else {
    return `Please continue playing the game, curl http://localhost:4000/player1Selection?selection1={selection1}`
  }
}

function compare(a, b, c, d) {
  if (a === "rock" || a === "Rock") {

    if (b === "rock" || b === "Rock") {
      return "draw"
    } else if (b === "paper" || b === "Paper") {
      countp2++
      return d;
    } else if (b === "scissors" || b === "Scissors") {
      countp1++
      return c;
    }
  } else if (a === "paper" || a === "Paper") {
    if (b === 'rock' || b === "Rock") {
      countp1++
      return c;
    } else if (b === 'paper' || b === "Paper") {
      return 'draw';
    } else if (b === 'scissors' || b === "Scissors") {
      countp2++
      return d;
    }
  } else if (a === "scissors" || a === "Scissors") {
    if (b === 'rock' || b === "Rock") {
      countp2++
      return d;
    } else if (b === 'paper' || b === "Paper") {
      countp1++
      return c;
    } else if (b === 'scissors' || b === "Scissors") {
      return 'draw';
    }
  }
}
module.exports = { compare, chooseNumberOfGame, player1Choice, player2Choice, startGame, checkIfGameOver, getCountP2, getCountP1, getNumberOfPlays };