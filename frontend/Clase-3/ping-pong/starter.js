//1. Acciones a los botones
//2. Botón verde asociado a jugador 1
//3. Botón rojo asociado a jugador 2
//4. Botón de reset
//5. Select de cantidad de puntos a jugar
//6. Lógica de juego

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if (!isGameOver) {
        player.score++;
        console.log(winningScore);
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => updateScores(p1, p2));

p2.button.addEventListener('click', () => updateScores(p2, p1));

winningScoreSelect.addEventListener('change', function () {
    console.log(this);
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', () => reset());

function reset() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}
