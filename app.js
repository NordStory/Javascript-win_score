const oneDisplay = document.querySelector('.score__oneDisplay');
const twoDisplay = document.querySelector('.score__twoDisplay');
const BtnPlayerOne = document.querySelector('.buttons_playerOne');
const BtnPlayerTwo = document.querySelector('.buttons_playerTwo');
const BtnReset = document.querySelector('.buttons_reset');
const winningScoreSelect = document.querySelector('#playTo');

let PlayerOneScore = 0;
let PlayerTwoScore = 0;
let winningScore = 3;
let isGameOver = false;

BtnPlayerOne.addEventListener('click', (e) => {
    if (!isGameOver) {
        PlayerOneScore += 1;
        if (PlayerOneScore === winningScore) {
            isGameOver = true;
            oneDisplay.classList.add('winner')
            twoDisplay.classList.add('loser')
            BtnPlayerOne.disabled = true;
            BtnPlayerTwo.disabled = true;
        }
        oneDisplay.textContent = PlayerOneScore;
    }
});

BtnPlayerTwo.addEventListener('click', (e) => {
    if (!isGameOver) {
        PlayerTwoScore += 1;
        if (PlayerTwoScore === winningScore) {
            isGameOver = true;
            twoDisplay.classList.add('winner')
            oneDisplay.classList.add('loser')
            BtnPlayerOne.disabled = true;
            BtnPlayerTwo.disabled = true;
        }
        twoDisplay.textContent = PlayerTwoScore;
    }
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

BtnReset.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    PlayerOneScore = 0;
    PlayerTwoScore = 0;
    oneDisplay.textContent = 0;
    twoDisplay.textContent = 0;
    twoDisplay.classList.remove('winner', 'loser');
    oneDisplay.classList.remove('winner', 'loser');
    BtnPlayerOne.disabled = false;
    BtnPlayerTwo.disabled = false;
}
