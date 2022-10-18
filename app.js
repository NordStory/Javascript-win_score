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
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (const player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('winner', 'loser');
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