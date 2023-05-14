import TileMap from './TileMap.js'

const tileSize = 32;
const velocity = 2;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);
const enemies = tileMap.getEnemies(velocity);

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
        let text = '   " You Win! "';
        if (gameOver) {
            text = '" Game Over ! "';
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, canvas.height / 2.5, canvas.width, 80);

        ctx.font = "50px comic sans MS";
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "yellow");
        gradient.addColorStop("0.2", "yellow");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("0.7", "yellow");
        gradient.addColorStop("1.0", "yellow");

        ctx.fillStyle = gradient;
        ctx.fillText(text, 10, canvas.height / 2);
    }
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75)