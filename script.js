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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (winner === -1) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'Tie!';
    }
}

function game() {
    let roundsLeft = 5;
    let playerScoreCount = 0;
    let computerScoreCount = 0;

    const container = document.querySelector('#container');
    const controls = document.querySelectorAll('#controls');
    const message = document.querySelector('#message');
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    controls.forEach((selection) => {
        selection.addEventListener('click', (e) => {
            if (roundsLeft > 0) {
                let computerSelection = computerPlay();
                let result = playRound(e.target.id, computerSelection);
                console.log(result);
                if (result === 1) {
                    playerScoreCount++;
                    playerScore.textContent = playerScoreCount;
                }
                else if (result === -1) {
                    computerScoreCount++;
                    computerScore.textContent = computerScoreCount;
                }
                message.textContent = logResult(result, e.target.id, computerSelection);
                roundsLeft--;
                if (roundsLeft === 0) {
                    if (playerScoreCount > computerScoreCount) message.textContent = 'You Win!';
                    else if (computerScoreCount > playerScoreCount) message.textContent = 'Computer Wins!'
                    else message.textContent = 'Tie!';
                    const restart = document.createElement('button');
                    restart.textContent = 'Restart';
                    container.appendChild(restart);
                    restart.addEventListener('click', () => {
                        /** reset game stat */
                        roundsLeft = 5;
                        playerScoreCount = 0;
                        computerScoreCount = 0;
                        /** reset dom */
                        playerScore.textContent = 0;
                        computerScore.textContent = 0;
                        message.textContent ='';
                        /** delete the restart button itself */
                        container.removeChild(restart);
                    });
                }
            }
        });
    });
}

game();
