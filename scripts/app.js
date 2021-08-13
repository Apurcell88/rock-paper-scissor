let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let moves = ['rock', 'paper', 'scissor'];
    let randNum = Math.floor(Math.random() * moves.length);
    let play = moves[randNum]

    return play;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        console.log('You win! Rock beats Scissor');
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('You win! Paper beats Rock');
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        console.log('You win! Scissor beats paper');
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a draw! Rock can\'t beat Rock');
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a draw! Paper can\'t beat Paper');
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'scissor') {
        console.log('It\'s a draw! Scissor can\'t beat Scissor');
    } else {
        computerScore++;
        console.log('You lose!');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('What is your move? ');
        playRound(playerSelection, computerPlay());
    }
    
    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore === computerScore) {
        console.log('It\'s a draw.');
    } else {
        console.log('You lose :(');
    }
}

game();