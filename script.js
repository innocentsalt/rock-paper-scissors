function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let combination = playerSelection.toLowerCase() + '-' + computerSelection.toLowerCase();
    let winner = '';
    switch (combination) {
        case 'rock-rock':
            break;
        case 'rock-paper':
            winner = computerSelection;
            break;
        case 'rock-scissors':
            winner = playerSelection;
            break;
        case 'paper-rock':
            winner = playerSelection;
            break;
        case 'paper-paper':
            break;
        case 'paper-scissors':
            winner = computerSelection;
            break;
        case 'scissors-rock':
            winner = computerSelection;
            break;
        case 'scissors-paper':
            winner = playerSelection;
            break;
        case 'scissors-scissors':
            break;
    }

    /**
     * If there is a winner and if the winner is Player then return 1
     * otherwise -1 i.e., Computer wins and if there isn't a winner i.e.,
     * Tie then return 0.
     */
    if (winner) {
        if (winner === playerSelection) return 1;
        else return -1;
    }
    return 0;
}

function logResult(winner, playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (winner === 1) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (winner === -1) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log('Tie!');
    }
}

function game(numOfRounds=5) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < numOfRounds; i++) {
        let playerSelection = window.prompt('Rock | Paper | Scissors', 'Rock');
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === -1) {
            computerScore++;
        }
        logResult(roundResult, playerSelection, computerSelection);
    }

    if (playerScore === computerScore) {
        console.log('Tie!');
    } else if (playerScore > computerScore) {
        console.log('You Win!');
    } else {
        console.log('You Lose!');
    }
}