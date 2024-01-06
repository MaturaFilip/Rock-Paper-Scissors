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
    } else {
        return "scissors"
    }
    
}

// playRound function that plays a single round 
    // playerSelection and computerSelection
    // Return string that declares the winner of the round


// playerSelection
    // Get input from user case-insensitive
    let player = prompt("Rock, Paper or Scissors? ").toLowerCase();
    console.log(player)

// game function
    // play 5 games
    // report user at the end (save the score)