// Rock-Paper-Scissors game

// score board
// won counter
let win_counter = 0;

// lose counter
let lose_counter = 0;

// draw counter
let draw_counter = 0;

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
};

const exitGame = () => {
  btn0.style.display = "block";
  btn05.style.display = "none";
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

// playRound function that plays a single round
// playerSelection and computerSelection
function playRound(computer, player) {
  // Return string that declares the winner of the round
  if (computer === player) {
    draw_counter += 1;
    return "Draw";
  } else if (computer === "rock" && player === "paper") {
    win_counter += 1;
    return "You won! Paper beats rock";
  } else if (computer === "paper" && player === "scissors") {
    win_counter += 1;
    return "You won! Scissors beats paper";
  } else if (computer === "scissors" && player === "rock") {
    win_counter += 1;
    return "Your won! Rock beats scissors";
  } else if (computer === "rock" && player === "scissors") {
    lose_counter += 1;
    return "You lose! Rock beats scissors";
  } else if (computer === "paper" && player === "rock") {
    lose_counter += 1;
    return "You lose! Paper beats rock!";
  } else if (computer === "scissors" && player === "paper") {
    lose_counter += 1;
    return "You lose! Scissors beats paper!";
  }
}

// playerSelection
// Get input from user case-insensitive
//

// game function
function game() {
  // 5 rounds -> with for loop
  for (i = 0; i < 5; i++) {
    // ask player for input and translate it to lower case
    let player = prompt("Rock, Paper or Scissors? ").toLowerCase();

    // check proper input
    if (player == "paper" || player == "rock" || player == "scissors") {
      // execute if the input is in correct
      alert(playRound(getComputerChoice(), player));

      // Tell the user that input was wrong and lower the i to add more rounds
    } else {
      alert("Wrong input");
      i -= 1;
    }
  }

  // print the final score after 5 rounds
  let finalResults;
  if (win_counter > lose_counter) {
    finalResults = "You are the total winner!";
  } else if (lose_counter > win_counter) {
    finalResults = "You are such a loser!";
  } else {
    finalResults = "No one wins!";
  }
}

// play the game!
// game()

// DOM
