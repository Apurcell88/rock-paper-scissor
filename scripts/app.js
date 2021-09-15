const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('#results-container');
const summaryContainer = document.querySelector('#summary-container');

let playerScore = 0;
let computerScore = 0;

let playerScoreEl = document.createElement('h2');
let computerScoreEl = document.createElement('h2');

rock.addEventListener('click', (e) => {
    checkGameOver()

    if (playerScore !== 5 || computerScore !== 5) {
        playRound('rock', computerPlay());
    }
});

paper.addEventListener('click', (e) => {
    checkGameOver();

    if (playerScore !== 5 || computerScore !== 5) {
        playRound('paper', computerPlay());
    }
    
});

scissor.addEventListener('click', (e) => {
    checkGameOver();
    
    if (playerScore !== 5 || computerScore !== 5) {
        playRound('scissor', computerPlay());
    }
});

function computerPlay() {
    let moves = ['rock', 'paper', 'scissor'];
    let randNum = Math.floor(Math.random() * moves.length);
    let play = moves[randNum]

    return play;
}

function createElement(el, text) {
    const element = document.createElement(el);
    element.textContent = text;

    return element;
}

function updatePlayerScore() {
    if (playerScore < 5) {
        playerScore++;
        summaryContainer.appendChild(createElement('h1', `${playerScore} - ${computerScore}`));
    } else if (playerScore === 5) {
        summaryContainer.appendChild(createElement('h1', `You Win!`));
    }
}

let yay = document.createElement('h2');
// summaryContainer.appendChild(createElement('h1', `${playerScore} - ${computerScore}`));

function updateComputerScore() {
    if (computerScore < 5) {
        computerScore++;
        yay.textContent = `${playerScore} - ${computerScore}`;
        summaryContainer.appendChild(yay);
    } else if (computerScore === 5) {
        yay.textContent = 'You Lose!'
        summaryContainer.appendChild(yay);
    }
    
}

function makeDraw() {
    summaryContainer.appendChild(createElement('h1', `${playerScore} - ${computerScore}`));
}

function checkGameOver() {
    if (playerScore === 5 && computerScore !== 5) {
        buttons.forEach((button) => {
            button.disabled = true;
        });
    } else if (playerScore !== 5 && computerScore === 5) {
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerScore !== 5 && computerScore !== 5) {
        results.innerHTML = '';
        summaryContainer.innerHTML = '';

        if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
            updatePlayerScore();
            results.appendChild(createElement('h2', 'You win! Rock beats Scissor'));
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
            updatePlayerScore();
            results.appendChild(createElement('h2', 'You win! Paper beats Rock'))
        } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
            updatePlayerScore();
            results.appendChild(createElement('h2', 'You win! Scissor beats paper'));
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
            makeDraw();
            results.appendChild(createElement('h2', 'It\'s a draw! Rock can\'t beat Rock'));
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
            makeDraw();
            results.appendChild(createElement('h2', 'It\'s a draw! Paper can\'t beat Paper'));
        } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'scissor') {
            makeDraw();
            results.appendChild(createElement('h2', 'It\'s a draw! Scissor can\'t beat Scissor'));
        } else {
            updateComputerScore();
            results.appendChild(createElement('h2', 'You lose!'));
        }
    }
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = prompt('What is your move? ');
    //     playRound(playerSelection, computerPlay());
    // }
    
    if (playerScore !== 5) {
        // console.log('You win the game!');
    } else if (playerScore === computerScore) {
        console.log('It\'s a draw.');
    } else {
        console.log('You lose :(');
    }
}

// game();