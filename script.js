// Rock-Paper-Scissors game

// score board
// won counter
let win_counter = 0;

// lose counter
let lose_counter = 0;

// draw counter
let draw_counter = 0;

let round_counter = 0;

// getComputerChoice function
function getComputerChoice() {
  // return randomly (not cheating) Rock, Paper or Scissors
  // get numbers 0, 1 or 2 randomly
  let randomNum = Math.floor(Math.random() * 3);

  // translate numbers to strings
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
}

// SHOW and HIDE table with buttons
const bigBox = document.querySelector(".big-box");
const btn0 = document.querySelector(".btn-0");
const btn05 = document.querySelector(".btn-05");

const show = () => {
  bigBox.style.display = "block";
};

const playGame = () => {
  btn0.style.display = "none";
  btn05.style.display = "block";
  resultsShow.textContent = "";
  resultsShow.style.display = "block";
};

const exitGame = () => {
  btn0.style.display = "block";
  btn05.style.display = "none";
  resultsShow.style.display = "none";
  win_counter = win_counter - win_counter;
  lose_counter = lose_counter - lose_counter;
  draw_counter = draw_counter - draw_counter;
  round_counter = round_counter - round_counter;

  losesNumber.textContent = `Loses: ${lose_counter}`;
  winsNumber.textContent = `Wins: ${win_counter}`;
  roundNumber.textContent = `Round: ${round_counter}`;
  drawNumber.textContent = `Draws: ${draw_counter}`;
};

const hide = () => {
  bigBox.style.display = "none";
};

bigBox.setAttribute("style", "display: none"); // hide board by default
btn05.setAttribute("style", "display: none"); // hide this button by default

// click Play! -> board show, click Exit! -> board hide
btn0.addEventListener("click", show);
btn0.addEventListener("click", playGame);
btn05.addEventListener("click", exitGame);
btn05.addEventListener("click", hide);

// Play game
const chooseRock = document.querySelector(".btn-1");
const choosePaper = document.querySelector(".btn-2");
const chooseScissors = document.querySelector(".btn-3");

const resultsShow = document.querySelector(".round-score");
// resultsShow.setAttribute(
//   "style",
//   "color: #fff; text-align: center;font-size: 60px; padding-top: 20px"
// );

const chooseR = function () {
  playRound(getComputerChoice(), "rock");
};

const chooseP = function () {
  playRound(getComputerChoice(), "paper");
};

const chooseS = function () {
  playRound(getComputerChoice(), "scissors");
};

chooseRock.addEventListener("click", chooseR);
choosePaper.addEventListener("click", chooseP);
chooseScissors.addEventListener("click", chooseS);

// score board!

const roundNumber = document.querySelector(".round");
const losesNumber = document.querySelector(".loses");
const winsNumber = document.querySelector(".wins");
const drawNumber = document.querySelector(".draws");

// playRound function that plays a single round
// playerSelection and computerSelection
function playRound(computer, player) {
  // Return string that declares the winner of the round
  if (computer === player) {
    resultsShow.setAttribute(
      "style",
      "color: #fff; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "Draw!";
    draw_counter = draw_counter + 1;
  } else if (computer === "rock" && player === "paper") {
    resultsShow.setAttribute(
      "style",
      "color: green; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "You won!";
    win_counter = win_counter + 1;
  } else if (
    computer === "paper" &&
    player === "scissors; text-align: center;font-size: 60px; padding-top: 20px"
  ) {
    resultsShow.setAttribute("style", "color: green");
    resultsShow.textContent = "You won!";
    win_counter = win_counter + 1;
  } else if (computer === "scissors" && player === "rock") {
    resultsShow.setAttribute(
      "style",
      "color: green; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "You won!";
    win_counter = win_counter + 1;
  } else if (computer === "rock" && player === "scissors") {
    resultsShow.setAttribute(
      "style",
      "color: red; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "You lose!";
    lose_counter = lose_counter + 1;
  } else if (computer === "paper" && player === "rock") {
    resultsShow.setAttribute(
      "style",
      "color: red; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "You lose!";
    lose_counter = lose_counter + 1;
  } else if (computer === "scissors" && player === "paper") {
    resultsShow.setAttribute(
      "style",
      "color: red; text-align: center;font-size: 60px; padding-top: 20px"
    );
    resultsShow.textContent = "You lose!";
    lose_counter = lose_counter + 1;
  }
  round_counter = round_counter + 1;

  losesNumber.textContent = `Loses: ${lose_counter}`;
  winsNumber.textContent = `Wins: ${win_counter}`;
  roundNumber.textContent = `Round: ${round_counter}`;
  drawNumber.textContent = `Draws: ${draw_counter}`;
}

// playerSelection
// Get input from user case-insensitive
//

// game function
// function game() {
//   // 5 rounds -> with for loop
//
//   // roundNumber.textContent = [i];
//   losesNumber.textContent = `Loses: ${lose_counter}`;
//   winsNumber.textContent = `Wins: ${win_counter}`;
//   roundNumber.textContent = `Round: ${round_counter}`;
//   drawNumber.textContent = `Draws: ${draw_counter}`;
//
//   // print the final score after 5 rounds
//   let finalResults;
//   if (win_counter > lose_counter) {
//     finalResults = "You are the total winner!";
//   } else if (lose_counter > win_counter) {
//     finalResults = "You are such a loser!";
//   } else {
//     finalResults = "No one wins!";
//   }
// }
