import TileMap from './TileMap.js'

const tileSize = 32;
const velocity = 2;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);
const enemies = tileMap.getEnemies(velocity);

const button = document.getElementById('start');

let gameOver = false;
let gameWin = false;
const gameOverSound = new Audio("sounds/gameOver.wav");
const gameWinSound = new Audio("sounds/gameWin.wav");

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tileMap.draw(ctx);
    pacman.draw(ctx, pause(), enemies);
    enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));
    drawGameEnd();
    checkGameOver();
    checkGameWin();
}

document.querySelector('#start-button').addEventListener('click', () => {
    document.querySelector('#start-screen').style.display = 'none'
    document.querySelector('#gameCanvas').style.display = 'flex'
})

function checkGameWin() {
    if (!gameWin) {
        gameWin = tileMap.didWin();
        if (gameWin) {
            gameWinSound.play();
        }
    }
}

function checkGameOver() {
    if (!gameOver) {
        gameOver = isGameOver();
        if (gameOver) {
            gameOverSound.play();
        }
    }
}

function isGameOver() {
    return enemies.some(
        (enemy) => !pacman.powerDotActive && enemy.collideWith(pacman)
    );
}

function pause() {
    return !pacman.madeFirstMove || gameOver || gameWin;
}

function drawGameEnd() {
    if (gameOver || gameWin) {
        let text = '    " You Win ! "';
        if (gameOver) {
            text = ' " Game Over ! "';
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, canvas.height / 2.5, canvas.width, 80);

        ctx.font = "50px comic sans MS";
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0.1", "yellow");
        gradient.addColorStop("0.4", "rgb(2, 0, 143)");
        gradient.addColorStop("0.8", "rgb(0, 255, 255)");
        gradient.addColorStop("1.0", "rgb(0, 255, 255)");


        ctx.fillStyle = gradient;
        ctx.fillText(text, 10, canvas.height / 2);
    }
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75)