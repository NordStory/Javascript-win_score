const player1 = {
    score: 0,
    button: document.querySelector('.buttons_playerOne'),
    display: document.querySelector('.score__oneDisplay'),
}
const player2 = {
    score: 0,
    button: document.querySelector('.buttons_playerTwo'),
    display: document.querySelector('.score__twoDisplay'),
}

const BtnReset = document.querySelector('.buttons_reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (getWin(player, opponent)) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            if (player.score > opponent.score) {
                player.display.classList.add('winner')
                opponent.display.classList.add('loser')
            } else if (player.score === opponent.score) {
                player.display.classList.add('nobody')
                opponent.display.classList.add('nobody')
            } else {
                opponent.display.classList.add('winner')
                player.display.classList.add('loser')
            }
        }
        player.display.textContent = player.score;
    }
}

function getWin(player, opponent) {
    if (winningScore % 2 === 0) {
        if ((winningScore - (player.score + opponent.score)) === 1) {
            if ((player.score + opponent.score + 1 === winningScore) && (opponent.score + 1 === player.score || player.score + 1 === opponent.score)) {
                return false
            } else {
                return true
            }
        } else if ((winningScore - (player.score + opponent.score)) === 0) { return true }
    } else {
        if ((player.score + opponent.score) === winningScore || (winningScore - (player.score + opponent.score)) === 1 && !(player.score === opponent.score)) { return true }
    }
    return false;

}

function reset() {
    isGameOver = false;
    match = 0;
    for (const player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('winner', 'loser', 'nobody');
        player.button.disabled = false;
    }
}

player1.button.addEventListener('click', () => {
    updateScores(player1, player2);
});

player2.button.addEventListener('click', () => {
    updateScores(player2, player1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

BtnReset.addEventListener('click', reset);