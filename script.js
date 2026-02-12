let score = 0;
let timeLeft = 10;
let gameInterval;
let countdown;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

function moveBox() {
    const x = Math.random() * 260;
    const y = Math.random() * 160;
    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

startBtn.addEventListener("click", () => {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = "Time: " + timeLeft;
    box.style.display = "block";
    moveBox();

    gameInterval = setInterval(moveBox, 800);

    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(countdown);
            box.style.display = "none";
            timerDisplay.textContent = "Game Over!";
        }
    }, 1000);
});
