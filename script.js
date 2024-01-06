// Rock-Paper-Scissors game

// getComputerChoice function
    
function getComputerChoice() {
    // return randomly (not cheating) Rock, Paper or Scissors
    // get numbers 0, 1 or 2 randomly
    let randomNum = Math.floor(Math.random() * 3)

    // translate numbers to strings
    if (randomNum === 0) {
        return "rock"
    } else if (randomNum === 1) {
        return "paper"
    } else if (randomNum === 2) {
        return "scissors"
    } 
}

// playRound function that plays a single round 
    // playerSelection and computerSelection
function playRound(computer, player) {
    // Return string that declares the winner of the round
    if (computer === player) {
        return "Draw"
    } else if (computer === "rock" && player === "paper") {
        return "You won! Paper beats rock"
    } else if (computer === "paper" && player === "scissors") {
        return "You won! Scissors beats paper"
    } else if (computer === "scissors" && player === "rock") {
        return "Your won! Rock beats scissors"
    } else if (computer === "rock" && player === "scissors") {
        return "You lose! Rock beats scissors"
    } else if (computer === "paper" && player === "rock") {
        return "You lose! Paper beats rock!"
    } else if (computer === "scissors" && player === "paper") {
        return "You lose! Scissors beats paper!"
    }
}


// playerSelection
// Get input from user case-insensitive
// 
 

// game function
function game() {

    // 5 rounds -> with for loop
    for (i = 0; i < 5; i++ ){

        // ask player for input and translate it to lower case
        let player = prompt("Rock, Paper or Scissors? ").toLowerCase();

        // check proper input
        if (player == "paper"|| player == "rock"|| player == "scissors") {
            // execute if the input is in correct 
            alert(playRound(getComputerChoice(), player))
        } else {
            alert("Wrong input")
            i -= 1
        }

    }
}

game()
    // play 5 games
    // report user at the end (save the score)

// 
